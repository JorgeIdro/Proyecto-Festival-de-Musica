function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival");document.querySelector(".lineup");window.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<1?e.classList.add("fixed"):e.classList.remove("fixed")}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=16;t++){const o=document.createElement("IMG");o.loading="lazy",o.width="300",o.height="200",o.src=`src/img/gallery/thumb/${t}.jpg`,o.alt="Imagen Galeria",o.onclick=function(){mostrarImagen(t)},e.appendChild(o)}}function mostrarImagen(e){const t=document.createElement("IMG");t.src=`src/img/gallery/full/${e}.jpg`,t.alt="Imagen Galeria";const o=document.createElement("DIV");o.classList.add("modal"),o.onclick=cerrarModal,o.appendChild(t);const c=document.querySelector("body");c.classList.add("overflow-hidden"),c.appendChild(o)}function cerrarModal(){const e=document.querySelector(".modal");e.classList.add("fadeOut"),setTimeout((()=>{e?.remove();document.querySelector("body").classList.remove("overflow-hidden")}),450)}function resaltaEnlace(){document.addEventListener("scroll",(function(){const e=document.querySelectorAll("section"),t=document.querySelectorAll(".navegacion-principal a");let o="";e.forEach((e=>{const t=e.offsetTop,c=e.clientHeight;window.scrollY>=t-c/3&&(o=e.id)})),t.forEach((e=>{e.classList.remove("active"),e.getAttribute("href")==="#"+o&&e.classList.add("active")}))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.hash,o=document.querySelector(t);o.scrollIntoView({behavior:"smooth"}),console.log(o)}))}))}document.addEventListener("DOMContentLoaded",(function(){navegacionFija(),crearGaleria(),resaltaEnlace(),scrollNav()}));