const App = {
  rootElement: '#app',
  selectedColor: 'white',
  numRows: 10,
  numCols: 10,
  cellWidth: 25,
  cellHeight: 25,
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
},
bindEvents: function(){},
changeColor: function(rowIndex, colIndex){
  this.grid[rowIndex][colIndex];
  const cell = this.grid[rowIndex][colIndex];
  cell.color = this.selectedColor;
  this.render();
},
render: function(){               //mixing up html with java makes it quicker and easier to change properties like height and width of the cell above; if it was hardcoded in js only, you cant change it easy
  this.root.innerHTML = '';
  this.grid.forEach((row, rowIndex) => {
    const rowContainer = document.createElement('div');
    rowContainer.style.height = `${this.cellHeight}px`;
    row.forEach((cell, colIndex) => {
      const element = cell.toHtml();
      element.addEventListener('click', () => this.changeColor(rowIndex, colIndex));
      rowContainer.appendChild(element);     //rows are now containers
    });
    this.root.appendChild(rowContainer);
  });

},
}
App.start();
