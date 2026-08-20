import './style.css'
import { generarPDF } from './generarpdf';

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
//----------------------Recolectar datos del formulario-----------------------------------
    let cajero = document.getElementById("cajero").value;
    const datosCajero = getCajero(cajero); //Funcion getCajero realiza la definición de los datos del cajero: nombre, puesto y coordenada x para ubicar en documento pdf
    
    const datos = {
    fecha: getDate(),//funcion getDate define fecha de hoy
    clave: document.getElementById("clave").value.trim().toUpperCase(),
    propietario: document.getElementById("propietario").value.trim().toUpperCase(),
    direccion: document.getElementById("direccion").value.trim().toUpperCase(),
    beneficiario: document.getElementById("beneficiario").value.trim().toUpperCase(),
    telefono: document.getElementById("telefono").value.trim(),
    cajero: datosCajero.nombre,
    puesto: datosCajero.puesto,
    x: datosCajero.x
    }
    generarPDF(datos);
})

//--------FUNCIONES--------------
function getDate(){
     const fecha = new Date();
    const fechaActual = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
    return fechaActual
}
function getCajero(cajero){
    console.log("cajero: ", cajero);
    let nombre;
    let puesto;
    let x = 165; //coordenada predeterminada si el puesto es CAJERO
    switch(cajero){
        case "4": nombre = "BLANCA IDALIA VELAZQUEZ HERNANDEZ";
                puesto = "DIRECTORA DE CATASTRO";
                x = 132 //Coordenada si el puesto es directora
                break;
        case "6": nombre = "BRYAN DANIEL LEDEZMA VIVEROS"
                puesto = "CAJERO"
                break;
        case "7": nombre = "LAZARO JACOBO SEGURA MORENO"
                puesto = "CAJERO"
                break;
    }
    return {
        nombre,
        puesto,
        x
    };
}
//-------------FUNCION PARA LIMPIAR DATOS DEL FORMULARIO---------------------
const btnLimpiar = document.getElementById("btnLimpiar");
btnLimpiar.addEventListener("click", limpiarFormulario);

function limpiarFormulario(){
    document.getElementById("clave").value = "";
    document.getElementById("propietario").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("beneficiario").value = "";
    document.getElementById("telefono").value = "";

}
