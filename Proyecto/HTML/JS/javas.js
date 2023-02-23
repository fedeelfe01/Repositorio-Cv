//document.getElementById(boton1).onclick = function(fede){
//   fede = console.log("Hola Mundo!!!")
//}
var boton = document.getElementById("boton1");

boton.onclick = function() {
   alert(this.innerHTML);
}