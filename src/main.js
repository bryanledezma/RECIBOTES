import './style.css'
import { generarPDF } from './generarpdf';

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const fecha = new Date();
    const fechaActual = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
    console.log(fechaActual);
    const datos = {

    fecha: fechaActual,
    clave: document.getElementById("clave").value,
    propietario: document.getElementById("propietario").value,
    direccion: document.getElementById("direccion").value,
    beneficiario: document.getElementById("beneficiario").value,
    telefono: document.getElementById("telefono").value

    }

    generarPDF(datos);

}


)

