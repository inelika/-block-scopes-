var globalVariable = "Я глобальная переменная!"; 
  console.log(globalVariable);
function func () {
  
  var functionVariable = "Я существую только в этой функции!";
  console.log(functionVariable);
  console.log(globalVariable);
  {
    var blockVariable = "Я существую только в этом блоке!";
    console.log(blockVariable);
    console.log(functionVariable);
    console.log(globalVariable);

  }
  console.log(functionVariable);
  //console.log(blockVariable); error 
}
console.log(globalVariable);
//console.log(blockVariable); eroor
// console.log(functionVariable); eroor
func();
