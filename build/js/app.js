function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival");document.querySelector(".lineup");window.addEventListener("scroll",(function(){t.getBoundingClientRect().bottom<1?e.classList.add("fixed"):e.classList.remove("fixed")}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=16;t++){const n=document.createElement("PICTURE");n.innerHTML=`\n        <source srcset="build/img/gallery/thumb/${t}.avif" type="image/avif">\n        <source srcset="build/img/gallery/thumb/${t}.webp" type="image/webp">\n        <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${t}.jpg" alt="imagen galeria">\n        `,n.onclick=function(){mostrarImagen(t)},e.appendChild(n)}}function mostrarImagen(e){const t=document.createElement("PICTURE");t.innerHTML=`\n    <source srcset="build/img/gallery/full/${e}.avif" type="image/avif">\n    <source srcset="build/img/gallery/full/${e}.webp" type="image/webp">\n    <img loading="lazy" width="200" height="300" src="build/img/gallery/full/${e}.jpg" alt="imagen galeria">\n    `;const n=document.createElement("DIV");n.classList.add("modal"),n.onclick=cerrarModal,n.appendChild(t);const o=document.querySelector("body");o.classList.add("overflow-hidden"),o.appendChild(n)}function cerrarModal(){const e=document.querySelector(".modal");e.classList.add("fadeOut"),setTimeout((()=>{e?.remove();document.querySelector("body").classList.remove("overflow-hidden")}),450)}function resaltaEnlace(){document.addEventListener("scroll",(function(){const e=document.querySelectorAll("section"),t=document.querySelectorAll(".navegacion-principal a");let n="";e.forEach((e=>{const t=e.offsetTop,o=e.clientHeight;window.scrollY>=t-o/3&&(n=e.id)})),t.forEach((e=>{e.classList.remove("active"),e.getAttribute("href")==="#"+n&&e.classList.add("active")}))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.hash,n=document.querySelector(t);n.scrollIntoView({behavior:"smooth"}),console.log(n)}))}))}document.addEventListener("DOMContentLoaded",(function(){navegacionFija(),crearGaleria(),resaltaEnlace(),scrollNav()}));