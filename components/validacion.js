let conversor = document.querySelector("conversor")
console.log(conversor)

let idioma = document.documentElement.lang;

var envioOk = document.getElementById('MensajeEnviado');
envioOk.classList.add('invisible'); 

const inputs = document.querySelectorAll('input'); //para que seleccione todos nuestros input's.
inputs.forEach(input => {
    input.addEventListener('blur', (input) => {
        valida(input.target);
    })
});
document.querySelector('form').addEventListener('post',validarDatos);

//Valida los datos de input's
function valida(input){
    const tipoDeInput = input.dataset.tipo //con dataset -> obtengo la coleccion de todos los data's y con la extension .tipo es la que queremos traer.
    if(input.validity.valid){  //-> True o false
        input.parentElement.querySelector(".input-mensaje-error").innerHTML = "";
        
    }else{
        console.log(input+ "Estoy en la parte invalidada");
        input.parentElement.querySelector(".input-mensaje-error").innerHTML = mostrarMensajeError(tipoDeInput, input); //si llegara a haber un error muestra esto!.
    }
}



const mensajesDeError = {
    nombre: { 
        valueMissing: idioma == 'es'? "El campo nombre no puede estar vacio":'name is required'
    },
    email: {
        valueMissing: idioma == 'es'? "El campo correo no puede estar vacio":'email is required',
        typeMismatch: idioma == 'es'?"El correo no es valido":'Invalid email'
    },
    asunto:{
        valueMissing: idioma =='es'? "Asunto no puede estar vacio.":'subject is required'
    }
}

function mostrarMensajeError(tipoDeInput, input){
    let mensaje ='';
    tipoDeErrores.forEach(error => {  //recorro el arreglo, tipo de errores
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }    
    });    
    return mensaje; //Aqui retorna al exterior, osea va a el inner.html de la linea 18 aprx.
}    

const tipoDeErrores=[
    "valueMissing",
    "typeMismatch",
];    



//Valida los datos de textArea
const textoArea = document.querySelector('textarea'); 
textoArea.addEventListener('blur', function() {
    let valor = textoArea.value;
    if (valor == "" ){
        textoArea.parentElement.querySelector(".input-mensaje-error").innerHTML = 
        idioma =='es'? "Campo Mensaje es obligatorio y debe contener máximo 400 carateres"
        :"The message field is required and must contain a maximum of 400 characters"
        return;
    } 
    if (valor.length >= 40 ){
        textoArea.parentElement.querySelector(".input-mensaje-error").innerHTML = "Max. 400 characters.";
        return;
    }
    if(true){
        textoArea.parentElement.querySelector(".input-mensaje-error").innerHTML =""; 
        
    }
});

//Validacion antes del submit(boton enviar)
function validarDatos(){
    window.event.preventDefault(delay);
    
    if (document.form.nombre.value=="" ) {
        alert(idioma == 'es'?"Campo nombre y apellido es obligatorio":'Name and surname field is required') 
        document.form.nombre.focus()
        
    }else if (document.form.email.value=="") {
        alert("e-mail required")
        document.form.email.focus() 
        
    }else if (document.form.asunto.value=="" ) {
        idioma == 'es'?alert("Campo Asunto es obligatorio"):alert('subject is required')
        document.form.asunto.focus() 
        
    }else if (document.form.mensaje.value=="" || document.form.mensaje.value.length >= 400 ){
        alert(idioma == 'es'?"Mensaje es obligatorio y debe contener máximo 400 carateres":
        'The message is required and must contain a maximum of 400 characters')  
        document.form.mensaje.focus()
        
    } else if (document.form.email.value.indexOf('@')==-1 ||
    document.form.email.value.indexOf('.')==-1 ) {
        alert("e-mail invalid")
    }  
}


function delay(){
    envioOk.classList.remove('invisible');   
}    
envioOk.classList.add('invisible')

