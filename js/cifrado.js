/**
 * vamos a crear una funciones de tipo callback de 
 * difrados y desifrados 
 */

 var cesar = (function(){
    var doStaff = (function(txt, desp, action){
        var replace = (function () {
           var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
            'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u',
             'v', 'w', 'x', 'y', 'z'];
           var l = abc.length;
           console.log(l);
           var mod = desp%l;
           desp = mod;
           console.log(mod);
           return function (c) {
               var i = parseFloat(abc.indexOf(c.toLowerCase()));

               if (i != -1) {
                   /*
                   if (i >= 25) {
                       return abc[0];
                   }
                   */
                   var pos = i;
                   //var something = 25 - i;
                   //console.log(something);
                   //Aqui va otra condición
                   //finalmente iria esto
                   //return abc[25 - i];

                   if (action) {
                       //cifrando
                       if (i + parseFloat(desp) > 26) {
                           console.log(26 - i + parseFloat(desp));
                           return abc[25 - i + parseFloat(desp)];
                       }else{
                           pos += parseFloat(desp);
                       }

                       //pos -= (pos<1)?1:0;
                   }else{
                       //descifrando
                       if (i - parseFloat(desp) < 0) {
                           console.log('ok:', 27 - Math.abs(i - parseFloat(desp)));
                           pos = 27 - Math.abs(i - parseFloat(desp));
                       }else{
                           pos -= parseFloat(desp);
                       }
                       //pos += (pos>1)?1:0;
                   }
                   return abc[pos];
               }
               return c; 
           };
        })();
        var re = (/[a-zñ]/ig);
        return String(txt).replace(re, function(match){
            return replace(match);
        });
    });
    
    return {
        encode : function (text, desp) {
            return doStaff(text, desp, true);
        },
        decode: function(text, desp) {
            return doStaff(text, desp, false);

        }
    };
    
 })();

 //crear las funciones decodificar y codificar
 function codificar() {
     document.getElementById("resultado").innerHTML = 
     cesar.encode(document.getElementById("cadena").value, document.getElementById("mod").value);
 }

 function decodificar() {
    document.getElementById("resultado").innerHTML = 
    cesar.decode(document.getElementById("cadena").value, document.getElementById("mod").value);
}