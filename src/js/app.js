document.addEventListener('DOMContentLoaded', function() { // Se activa cuando la pagina se carga
    crearGaleria();
})

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i <= 16; i++) {
        const imagen = document.createElement('IMG');
        // por convención al momento de crear una etiqueta debe ir en mayúsculas
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = 'Imagen Galeria';

        // Evento handler
        imagen.onclick = function () { // se ejecuta cuando el usuario da click en la imagen
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG');   
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = 'Imagen Galeria';
    
    //Generar Modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal; // en este caso no es necesario un function ya que no se le da un argumento
    modal.appendChild(imagen); // insertamos img al div
    
    // Botón cerrar modal 

    // const cerrarModalBtn = document.createElement('BUTTON');
    // cerrarModalBtn.textContent = 'X';
    // cerrarModalBtn.classList.add('btn-cerrar');
    // cerrarModalBtn.onclick = cerrarModal;
    // modal.appendChild(cerrarModalBtn);

    // Agregar al HTML
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden'); // agrega la clase
    body.appendChild(modal); // insertamos el div al body
}

function cerrarModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('fadeOut')

    setTimeout(() => {
        modal?.remove(); // consulta si existe la clase modal, si loc encuentra entonces lo elimina
        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden'); // elimina la clase
    }, 450); // 0,45 s
    // si bien la animación es de .5s aquí e puse menos para que no reaparezca la imagen
}