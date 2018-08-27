
//Todo lo que esta afuera no puede ingresar a lo que esta adentro.
//Todo lo que esta adentro puede ingresar a lo que esta afuera.

(function(){
     var variableGlobal = "Esta es Global";

     var miFuncion = function(){
          alert(variableGlobal);

          var funcionLocal = function(){
               var variableLocal = "Esta es variable Local";

          }
          funcionLocal();
     }

     miFuncion();
}())
