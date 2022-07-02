function validar(){
    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#correo").value;
    let celular = document.querySelector("#celular").value;
    let expresionRegular = /\w+@\w+\.+[a-z]/;  //para correo electronico

    if(nombre === "" || correo === "" || celular === ""){
        //alert("Rellenar todos los campos!");
        
        Swal.fire({
            html:"<h3 class='texto'>¡Rellenar todos los campos!</h3>",
            icon:"error",
            confirmButtonText: "Aceptar",
            backdrop: false, 
            footer: '<h3 class ="footer">¡La información es importante!</h3>', 
            //timer: 5000,
          	//timerProgressBar: true,
            padding: "10px",
            customClass:{
                 	popup: "class_popup",
                 	icon:"class_icon",
                  confirmButton:"class_buttonConfirm",
                  cancelButton:"class_buttonCancel"
            },
            //PERSONALIZAR EL BOTON DE CONFIRMAR 
               showConfirmButton:true,   //false desaparece el boton
               confirmButtonColor:"#054256",
               confirmButtonAriaLabel:"confirmar",
            
            //PERSONALIZAR EL BOTON DE CANCELAR 
               showCancelButton: false,  //false desaparece el boton
               cancelButtonText: "cancelar",
               cancelButtonColor:"#fff54",
               cancelButtonAriaLabel:"dfdfa",

            //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
               buttonsStyling: false,     //true para trabajar con stilos de switchAlert
               showCloseButton: true,     //coloca el la x para cerrar
               closeButtonAriaLabel:"Cerrar alerta"
         });
         return false;
                
    }else if(nombre.length > 30){
        //alert("no puedes ingresar mas de 20 palabras en el campo nombre");
        
        Swal.fire({
            html:"<h3 class='texto'>¡No puedes ingresar más de 20 palabras!</h3>",
            icon:"error",
            confirmButtonText: "Aceptar",
            backdrop: false,
            footer: 'Campo " Nombre "',  
            timer: 9000,
        	timerProgressBar: true,
            padding: "10px",
            customClass:{
                 	popup: "class_popup",
                 	icon:"class_icon",
                    confirmButton:"class_buttonConfirm",
                  	cancelButton:"class_buttonCancel"
            },
            //PERSONALIZAR EL BOTON DE CONFIRMAR 
               showConfirmButton:true,   //false desaparece el boton
               confirmButtonColor:"#054256",
               confirmButtonAriaLabel:"confirmar",
            
            //PERSONALIZAR EL BOTON DE CANCELAR 
               showCancelButton: false,  //false desaparece el boton
               cancelButtonText: "cancelar",
               cancelButtonColor:"#fff54",
               cancelButtonAriaLabel:"dfdfa",

            //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
               buttonsStyling: false,     //true para trabajar con stilos de switchAlert
               showCloseButton: true,     //coloca el la x para cerrar
               closeButtonAriaLabel:"Cerrar alerta"
         });
         return false;  
        
    }else if (isNaN(celular)){
        //alert("El dato que ingresaste no es un numero, o verifica que no haya espacios de por medio");
        
        Swal.fire({
            html:"<h3 class='texto'>¡El dato que ingresaste no es un número, o verifica que no haya espacios de por medio!</h3>",
            icon:"error",
            confirmButtonText: "Aceptar",
            backdrop: false,  
            footer: 'Campo " Celular "',
            timer: 9000,
        	timerProgressBar: true,
            padding: "10px",
            customClass:{
                 	popup: "class_popup",
                 	icon:"class_icon",
                    confirmButton:"class_buttonConfirm",
                  	cancelButton:"class_buttonCancel"
            },
            //PERSONALIZAR EL BOTON DE CONFIRMAR 
               showConfirmButton:true,   //false desaparece el boton
               confirmButtonColor:"#054256",
               confirmButtonAriaLabel:"confirmar",
            
            //PERSONALIZAR EL BOTON DE CANCELAR 
               showCancelButton: false,  //false desaparece el boton
               cancelButtonText: "cancelar",
               cancelButtonColor:"#fff54",
               cancelButtonAriaLabel:"dfdfa",

            //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
               buttonsStyling: false,     //true para trabajar con stilos de switchAlert
               showCloseButton: true,     //coloca el la x para cerrar
               closeButtonAriaLabel:"Cerrar alerta"
         });
         return false; 
        
    }else if(celular.length < 8 || celular.length > 15 ){
        //alert("solo se permiten 8 digitos minimo y 15 maximo, o verifica que no haya espacios de por medio");
        
        Swal.fire({
            html:"<h3 class='texto'>¡Solo se permiten 8 dígitos mínimo y 15 máximo, o verifica que no haya espacios de por medio!</h3>",
            icon:"error",
            confirmButtonText: "Aceptar",
            backdrop: false,  
            footer: 'Campo " Celular "',
            timer: 9000,
        	timerProgressBar: true,
            padding: "10px",
            customClass:{
                 	popup: "class_popup",
                 	icon:"class_icon",
                    confirmButton:"class_buttonConfirm",
                  	cancelButton:"class_buttonCancel"
            },
            //PERSONALIZAR EL BOTON DE CONFIRMAR 
               showConfirmButton:true,   //false desaparece el boton
               confirmButtonColor:"#054256",
               confirmButtonAriaLabel:"confirmar",
            
            //PERSONALIZAR EL BOTON DE CANCELAR 
               showCancelButton: false,  //false desaparece el boton
               cancelButtonText: "cancelar",
               cancelButtonColor:"#fff54",
               cancelButtonAriaLabel:"dfdfa",

            //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
               buttonsStyling: false,     //true para trabajar con stilos de switchAlert
               showCloseButton: true,     //coloca el la x para cerrar
               closeButtonAriaLabel:"Cerrar alerta"
         });
         return false; 
        
    }else if(!expresionRegular.test(correo)){
        //alert("el correo no es valido");
        
        Swal.fire({
            html:"<h3 class='texto'>¡El correo no es válido!</h3>",
            icon:"error",
            confirmButtonText: "Aceptar",
            backdrop: false,  
            footer: 'Campo " Correo electronico "',
            timer: 5000,
        	timerProgressBar: true,
            padding: "10px",
            customClass:{
                 	popup: "class_popup",
                 	icon:"class_icon",
                    confirmButton:"class_buttonConfirm",
                  	cancelButton:"class_buttonCancel"
            },
            //PERSONALIZAR EL BOTON DE CONFIRMAR 
               showConfirmButton:true,   //false desaparece el boton
               confirmButtonColor:"#054256",
               confirmButtonAriaLabel:"confirmar",
            
            //PERSONALIZAR EL BOTON DE CANCELAR 
               showCancelButton: false,  //false desaparece el boton
               cancelButtonText: "cancelar",
               cancelButtonColor:"#fff54",
               cancelButtonAriaLabel:"dfdfa",

            //PERSONALIZAR Y DARLE ESTILOS A LOS BOTONES 
               buttonsStyling: false,     //true para trabajar con stilos de switchAlert
               showCloseButton: true,     //coloca el la x para cerrar
               closeButtonAriaLabel:"Cerrar alerta"
         });
         return false;  
    }
}


