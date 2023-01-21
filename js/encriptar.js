const ingresarTexto = document.getElementById('ingresar_texto');
const btnEncriptar = document.getElementById('btn_encriptar');
const btnDesencriptar = document.getElementById('btn_desencriptar');
const textoResultado = document.getElementById('texto_resultado');
const btnCopiar = document.getElementById('copiar_texto');
const soloLetras = '^[a-z !ñ]+$';

document.addEventListener('DOMContentLoaded', () => {
    btnEncriptar.addEventListener('click', encriptarTexto);
    btnDesencriptar.addEventListener('click', desencriptarTexto);
    btnCopiar.addEventListener('click', copiarTexto);
});

function encriptarTexto(e) {
    e.preventDefault();
    textoResultado.value = '';
    let texto = ingresarTexto.value;

    if(texto.match(soloLetras)!=null){
        let palabras = texto.split(' ');
        let nuevasPalabras = [];

        for (let palabra of palabras) {
            palabra = palabra.replaceAll('e','enter');
            palabra = palabra.replaceAll('i','imes');
            palabra = palabra.replaceAll('a','ai');
            palabra = palabra.replaceAll('o','ober');
            palabra = palabra.replaceAll('u','ufat');

            nuevasPalabras.push(palabra);
        }

        const resultado = nuevasPalabras.join(' ');

        textoResultado.value = resultado;

        var ocultarImagen = document.getElementById('persona');
        ocultarImagen.style.display = 'none';
        var ocultarTitulo = document.getElementById('ocultar_titulo');
        ocultarTitulo.style.display = 'none';
        var mostrarInputTexto = document.getElementById('texto_resultado');
        mostrarInputTexto.style.display = 'flex';
        var mostrarBotonCopiar = document.getElementById('copiar_texto');
        mostrarBotonCopiar.style.display = 'flex';
        var mostrarCajaEnTelefono = document.getElementById('mostrar_caja');
        mostrarCajaEnTelefono.style.display = 'flex';
    } else{
        mostrarError('Solo se permiten letras minusculas, sin acentos');
        return;
    }
}

function desencriptarTexto(e){
    e.preventDefault();
    textoResultado.value = '';
    let texto = ingresarTexto.value;

    if(texto.match(soloLetras)!=null){
        let palabras = texto.split(' ');
        let nuevasPalabras = [];

        for (let palabra of palabras){
            palabra = palabra.replaceAll('enter','e');
            palabra = palabra.replaceAll('imes','i');
            palabra = palabra.replaceAll('ai','a');
            palabra = palabra.replaceAll('ober','o');
            palabra = palabra.replaceAll('ufat','u');

            nuevasPalabras.push(palabra);
        }

        const resultado = nuevasPalabras.join(' ');

        textoResultado.value = resultado;

        var ocultarImagen = document.getElementById('persona');
        ocultarImagen.style.display = 'none';
        var ocultarTitulo = document.getElementById('ocultar_titulo');
        ocultarTitulo.style.display = 'none';
        var mostrarInputTexto = document.getElementById('texto_resultado');
        mostrarInputTexto.style.display = 'flex';
        var mostrarBotonCopiar = document.getElementById('copiar_texto');
        mostrarBotonCopiar.style.display = 'flex';
        var mostrarCajaEnTelefono = document.getElementById('mostrar_caja');
        mostrarCajaEnTelefono.style.display = 'flex';
    }else {
        mostrarError('Solo se permiten letras minusculas, sin acentos');
        return;
    }
}

function  mostrarError(mensaje){
    const existeError = document.querySelector('.error');

    if(!existeError){
        const formulario = document.getElementById('formulario');
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('error')

        divMensaje.textContent = mensaje;
        formulario.appendChild(divMensaje);
        
        setTimeout(()=>{
            divMensaje.remove();
        }, 3000);
    }
}

function copiarTexto(e){
    e.preventDefault();
    const mensaje = textoResultado.value;

    navigator.clipboard.writeText(mensaje);
}