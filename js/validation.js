const formulario=document.getElementById('form');
const inputs=document.querySelectorAll(".input-padron");
const textA=document.querySelectorAll(".textarea-padron");
const button=document.getElementsByClassName('enviar');
const Name=document.getElementById('name');

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.

}

const validarformulario = (e) => {
    switch(e.target.id){
        case "name":
            validarCampo(expresiones.name, e.target,'name');
        break;
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;
        case "asunto":
            validarCampo(expresiones.asunto, e.target, 'asunto');
        break;
    }
}

const validarCampo = (expresion, input,campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('_grupo_usuario_incorrecto');
        document.getElementById(`alert-${campo}`).style.display='none';
    }
    else{
        document.getElementById(`grupo_${campo}`).classList.add('_grupo_usuario_incorrecto');
        document.getElementById(`alert-${campo}`).style.display='block';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarformulario);
    input.addEventListener('blur', validarformulario);
});

textA.forEach((textA) => {
    textA.addEventListener('keyup', validarformulario);
    textA.addEventListener('blur', validarformulario);
});

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
});

