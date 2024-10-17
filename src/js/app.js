document.addEventListener('DOMContentLoaded', function() { // Se activa cuando la pagina se carga
    navegacionFija();
    crearGaleria();
    resaltaEnlace();
    scrollNav();
})

function navegacionFija() {
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    window.addEventListener('scroll', function () {
        //  getBoundingClientRect() nos refleja las coordenadas que tenga el elemento, si la coordenada bottom(abajo) es menor a 1 añadirá una clase al header, de otro modo lo eliminara
        if (sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    })
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i <= 16; i++) {
        // por convención al momento de crear una etiqueta debe ir en mayúsculas
        const imagen = document.createElement('PICTURE');
        imagen.innerHTML = `
        <source srcset="build/img/gallery/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/gallery/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
        `;

        // Evento handler
        imagen.onclick = function () { // se ejecuta cuando el usuario da click en la imagen
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('PICTURE');
    imagen.innerHTML = `
    <source srcset="build/img/gallery/full/${i}.avif" type="image/avif">
    <source srcset="build/img/gallery/full/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/gallery/full/${i}.jpg" alt="imagen galeria">
    `;
    
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
    modal.classList.add('fadeOut');

    setTimeout(() => {
        modal?.remove(); // consulta si existe la clase modal, si lo encuentra entonces lo elimina
        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden'); // elimina la clase
    }, 450); // 0,45 s
    // si bien la animación es de .5s aquí e puse menos para que no reaparezca la imagen
}

function resaltaEnlace() {
    document.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion-principal a');
        let actual = ''; // el valor ira cambiando cada vez que nos movamos de sección en la pagina

        // con esto guardamos la sección que mas prepondera en la pantalla
        sections.forEach(section => {
            const sectionTop = section.offsetTop; // Nos dice que tan separado(px) están los elementos del top de la caja padre(body)
            const sectionHeight = section.clientHeight; // Nos dice la altura(px) de los elementos

            // Con esta operación vemos que sección esta mas visible
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                actual = section.id;
            }
        })

        // aca detectamos cuan enlace tiene el mismo valor que "actual"
        navLinks.forEach(link => {
            link.classList.remove('active') // elimina la clase
            //  get attribute : conseguir atributo
            if(link.getAttribute('href') === '#' + actual){ // agrega la clase si se cumple la condición
                link.classList.add('active'); // se le agrega la clase
            }
        })
    })
} 

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a');

    navLinks.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault(); //evitamos evento por default
            const sectionScroll = e.target.hash; // guardamos el id del enlace que hicimos click
            const section = document.querySelector(sectionScroll); // guardamos la etiqueta del enlace que hicimos click

            section.scrollIntoView({behavior: 'smooth'}); // Nos muestra la etiqueta que guardamos en section, ademas se agregarle la animación de scroll
            console.log(section);
        })
    })
}