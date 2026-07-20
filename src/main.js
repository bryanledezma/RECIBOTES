import './style.css'
import { generarPDF } from './generarpdf';

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const fecha = new Date();
    const fechaActual = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;

    let cajero = document.getElementById("cajero").value;
    let puesto;
    let x = 165; //coordenada predeterminada si el puesto es CAJERO
    switch(cajero){
        case "4": cajero = "BLANCA IDALIA VELAZQUEZ HERNANDEZ";
                puesto = "DIRECTORA DE CATASTRO";
                x = 132 //Coordenada si el puesto es directora
                break;
        case "6": cajero = "BRYAN DANIEL LEDEZMA VIVEROS"
                puesto = "CAJERO"
                break;
        case "7": cajero = "LAZARO JACOBO SEGURA MORENO"
                puesto = "CAJERO"
                break;
    }

    const datos = {

    fecha: fechaActual,
    clave: document.getElementById("clave").value,
    propietario: document.getElementById("propietario").value,
    direccion: document.getElementById("direccion").value,
    beneficiario: document.getElementById("beneficiario").value,
    telefono: document.getElementById("telefono").value,
    cajero: cajero,
    puesto: puesto,
    x:x
    }

    generarPDF(datos);

}


)

const btnLimpiar = document.getElementById("btnLimpiar");
btnLimpiar.addEventListener("click", limpiarFormulario);

function limpiarFormulario(){
    document.getElementById("clave").value = "";
    document.getElementById("propietario").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("beneficiario").value = "";
    document.getElementById("telefono").value = "";

}
