{var nom=0;
var eda=0;
var fech=0;
var nac=0;
var dn=0;
var dir=0;
var tel=0;
var mai=0; }

document.getElementById('boton1').onclick = function () {
   console.log("Nombre");
   if (nom ==0){
   document.getElementById('all.nombre').innerHTML = "Federico Ezequiel Bandini";
   nom+1;
}
else{
   document.getElementById('all.nombre').innerHTML = '';
}
}

document.getElementById('boton2').onclick = function () {
   console.log("Edad");
   document.getElementById('edad2').innerHTML = "34 Años";
}
document.getElementById('boton3').onclick = function () {
   console.log("Fecha");
   document.getElementById('fecha2').innerHTML = "22 de Septiembre de 1988";
}
document.getElementById('boton4').onclick = function () {
   console.log("Nacionalidad");
   document.getElementById('nacion2').innerHTML = "Argentino";
}
document.getElementById('boton5').onclick = function () {
   console.log("DNI");
   document.getElementById('dni2').innerHTML = "34.076.573";
}
document.getElementById('boton6').onclick = function () {
   console.log("Direccion");
   document.getElementById('dire2').innerHTML = "Terrada 5462, Isidro Casanova";
}
document.getElementById('boton7').onclick = function () {
   console.log("Telefono");
   document.getElementById('celu2').innerHTML = "15-3007-8248";
}
document.getElementById('boton8').onclick = function () {
   console.log("Mail");
   document.getElementById('mail2').innerHTML = "Fede_2007@hotmail.com";
}
