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
                   var pos = i;
                   //var something = 25 - i;
                   //console.log(something);
                   //Aqui va otra condición
                   //finalmente iria esto
                   //return abc[25 - i];
                   if (action) {
                       //cifrando
                       if (i + parseFloat(desp) > 26) {
                           let s = i + parseFloat(desp);
                           let ff = Math.abs(l - s);
                           console.log(ff);
                           return abc[ff];
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
     let regex = /^[0-9]+$/ig;
     let txt = document.getElementById("mod").value;
     let a = $(".add");
     if (document.getElementById("cadena").value == "") {
        //document. .innerHTML = '<div class="alert alert-danger alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>¡Advertencia!</strong> Favor de introducir algún texto al campo de texto</div>';
        a[0].innerHTML += '<div class="alert alert-danger alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>¡Advertencia!</strong> Favor de introducir algún texto al campo de texto</div>';
    }else if (regex.test(txt)) {
        document.getElementById("resultado").innerHTML = 
        cesar.encode(document.getElementById("cadena").value, txt); 
    } else {
        a[0].innerHTML += '<div class="alert alert-danger alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><strong>¡Advertencia!</strong> Favor solo introducir numeros enteros positivos</div>';
    }
 }

 function decodificar() {
    document.getElementById("resultado").innerHTML = 
    cesar.decode(document.getElementById("cadena").value, document.getElementById("mod").value);
}