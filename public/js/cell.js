//const Cell = {
  //width: 100,
  //height: 100,
  //color: 'red',
//};

// function createCell(width, height, color){      //this function creates cell; this is a factory function: takes ingredients and make a product
//   const Cell = {
//     width: width,
//     height: height,
//     color: color
//   };
//   return Cell;                //this returns cell; now we can call this function over and over again
// }
//this file make a reusable code that we can call on a lot
//constructor function is what wegonna use; notice the capital letter (proxy for a class; not technically a class)
function Cell(width, height, color){
  this.width = width || 100; //browser choses width you type inside () of new Cell(), or defaults to 100; so if you type new Cell(200), it will give Cell{200,100,'red'}
  this.height = height || 100;
  this.color = color || 'pink';
}                           //this kind of behaves like c++, its up to the developer, will do similar as above factory function; it gives us info in the browser upon inspection

//add a method to the data above
Cell.prototype.toHtml = function(){
  const div = document.createElement('div');     //height and width need a unit, ie pixels, so put it in the ``
  div.style.height = `${this.height}px`;
  div.style.display = 'inline-block';
  div.style.width = `${this.width}px`;
  div.style.border = '0.25px solid black';
  div.style.backgroundColor = this.color;
  return div;
};             //cell prototype is the template that the cell object is built on top of
