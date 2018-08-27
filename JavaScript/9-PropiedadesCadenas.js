//.length Devuelve la cantidad de caracteres.
//.substring(indice del caracter) Corta la cadena de caracteres desde la posicion ingresada.
//.substr(indice del 1re caracter, indice del 2do caracter) Corta una cadena de texto desde los 2 indices ingresados.
//.indexOf(caracter, posicion que desea buscar en adelante) Devuelve el indice en el que se encuentra el caracter ingresado.
//.lastIndexOf(caracter) hace lo mismo que el anterior pero de atras para adelante.
//.replace(Vieja cadena, Nueva cadena) Cambia la cadena de texto por otra. Sino puedes cambiar caracteres.
//.toUpperCase(cadena de texto) Cambia la cadena a Mayusculas.
//.toLowerCase(cadena de texto) Cambia la cadena a Minusculas.
 
var texto = "Hernan Franco";

//var texto2 = texto.indexOf("a") + 1;

var nuevoTexto = texto.toUpperCase(texto);

document.write(nuevoTexto);
