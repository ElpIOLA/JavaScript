
function numeroMaximo(num1, num2){

     var index;
     if(num1 > num2){
          index = num1;
     }else {
          index = num2;
     }

     return index;
}

document.write("El numero maximo es: " + numeroMaximo(5,3));
