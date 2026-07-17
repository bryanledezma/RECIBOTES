import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export async function generarPDF(datos){

    const respuesta = await fetch("/plantilla.pdf");
    const bytes = await respuesta.arrayBuffer();

    const pdfDoc = await PDFDocument.load(bytes);

    const paginas = pdfDoc.getPages();
    const pagina = paginas[0];

    const fuente = await pdfDoc.embedFont(StandardFonts.Helvetica);

    pagina.drawText(datos.clave, {
        x: 275,
        y: 445,
        size: 10,
        font: fuente,
        color: rgb(0,0,0)
    });

    pagina.drawText(datos.propietario, {
        x: 275,
        y: 422,
        size: 10,
        font: fuente,
        color: rgb(0,0,0)
    });

     pagina.drawText(datos.direccion, {
        x: 275,
        y: 402,
        size: 10,
        font: fuente,
        color: rgb(0,0,0)
    });

     pagina.drawText(datos.telefono, {
        x: 275,
        y: 382,
        size: 10,
        font: fuente,
        color: rgb(0,0,0)
    });

     pagina.drawText(datos.beneficiario, {
        x: 400,
        y: 190,
        size: 10,
        font: fuente,
        color: rgb(0,0,0)
    });

    pagina.drawText(datos.fecha, {
        x: 444,
        y: 679,
        size: 10,
        font: fuente,
        color: rgb(0,0,0)
    });

    pagina.drawText(datos.cajero, {
        x: 100,
        y: 190,
        size: 10,
        font: fuente,
        color: rgb(0,0,0)
    });

    pagina.drawText(datos.puesto, {
        x: datos.x, //132 para DIRECTORA y 
        y: 170,
        size: 10,
        font: fuente,
        color: rgb(0,0,0)
    });



    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: "application/pdf" });

    const url = URL.createObjectURL(blob);

    window.open(url);

}