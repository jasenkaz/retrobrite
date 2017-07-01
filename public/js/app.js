const App = {
  rootElement: '#app',
  selectedColor: 'white',
  numRows: 30,
  numCols: 30,
  cellWidth: 15,
  cellHeight: 15,
  grid: [],                 //grid is an array of array
  start: function(){
    this.cacheDOM();
    this.makeGrid();
    this.bindEvents();
    this.render();
  },
makeGrid: function(){
  this.grid = new Array(this.numRows);
  for(let rowIndex = 0; rowIndex < this.numRows; rowIndex += 1){        //starts the row at index 0, less than how many you have, increment by 1, reiterates it by adding 1
  this.grid[rowIndex] = new Array(this.numCols);
  for(let colIndex = 0; colIndex < this.numCols; colIndex += 1){
    this.grid[rowIndex] [colIndex] = new Cell(this.cellWidth, this.cellHeight, this.cellColor);
    }
  }
},

cacheDOM: function(){
  this.root = document.querySelector(this.rootElement);
  this.colorButtons = this.root.querySelectorAll('button.color');
  this.gridOutput = this.root.querySelector('.grid-output');
},

bindEvents: function(){
  this.colorButtons.forEach(btn => {
    const newColor = btn.classList[1];
    btn.addEventListener('click', () => this.setColor(newColor));
    });
},
setColor: function(newColor){
  this.selectedColor = newColor;
},
changeColor: function(rowIndex, colIndex){
  const cell = this.grid[rowIndex][colIndex];
  cell.color = this.selectedColor;
  this.render();
},
resetGrid: function(){
  this.selectedColor = 'white';
  this.makeGrid();
  this.render();
},

 render: function(){               //mixing up html with java makes it quicker and easier to change properties like height and width of the cell above; if it was hardcoded in js only, you cant change it easy
  this.gridOutput.innerHTML = '';
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset';
  resetButton.addEventListener('click', () => this.resetGrid());
  this.gridOutput.appendChild(resetButton);
  this.grid.forEach((row, rowIndex) => {
    const rowContainer = document.createElement('div');

      element.addEventListener('click', () => this.changeColor(rowIndex, colIndex));
      rowContainer.appendChild(element);     //rows are now containers
    });
    this.gridOutput.appendChild(rowContainer);
  });
}
};
App.start();
