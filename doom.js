const entradaTexto = document.getElementById('entradaTexto');
const salidaTexto = document.getElementById('salidaTexto');
const btnEncriptar = document.getElementById('btnEncriptar');
const btnDesencriptar = document.getElementById('btnDesencriptar');
const btnCopiar = document.getElementById('btnCopiar');


function validarTexto(texto) {
  return /^[A-ZÁÉÍÓÚÑa-záéíóúñ]+$/.test(texto);
}


function encriptar(texto) {
  return texto.replace(/e/gi, 'enter')
             .replace(/i/gi, 'imes')
             .replace(/a/gi, 'ai')
             .replace(/o/gi, 'ober')
             .replace(/u/gi, 'ufat');
}


function desencriptar(texto) {
  return texto.replace(/enter/gi, 'e')
             .replace(/imes/gi, 'i')
             .replace(/ai/gi, 'a')
             .replace(/ober/gi, 'o')
             .replace(/ufat/gi, 'u');
}


function copiarTexto() {
  navigator.clipboard.writeText(salidaTexto.value);    
  alert('Texto copiado al portapapeles');
}


btnEncriptar.addEventListener('click', () => {
  const texto = entradaTexto.value;
  if (validarTexto(texto)) {
    const textoCifrado = encriptar(texto);
    salidaTexto.value = textoCifrado;
    btnCopiar.style.display = "block";
    
  } else {
    alert('Por favor, ingresa solo letras.');
  }
});

btnDesencriptar.addEventListener('click', () => {
  const texto = entradaTexto.value;
  if (validarTexto(texto)) {
    const textoDescifrado = desencriptar(texto);
    salidaTexto.value = textoDescifrado;
  } else {
    alert('Por favor, ingresa solo letras.');
  }
});

btnCopiar.addEventListener('click', copiarTexto);