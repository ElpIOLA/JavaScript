
var nombre, edad;

nombre = prompt("Ingrese su nombre: ");
edad = prompt("Ingrese su edad: ");

if(edad >= 18){
     document.write("Bienvenido " + nombre + ". Su edad es: " + edad);
}else {
     document.write("Usted es menor de edad.");
}
