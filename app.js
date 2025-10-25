// Carousel de 3 líneas que cambia cada 2s al azar, sin repetir inmediatamente
const lines = [
  '...vestibulum mollis, tortor ac congue commodo',
  '...quis vulputate dolor augue ut mauris',
  '...laoreet, iaculis rhoncus neque porttitor'
];
let lastIndex = -1;
function nextLine() {
  let idx;
  do { idx = Math.floor(Math.random() * lines.length); } while (idx === lastIndex);
  lastIndex = idx;
  document.getElementById('carousel-line').textContent = lines[idx];
}
setInterval(nextLine, 2000);
nextLine();

// Mostrar bloque de Opciones en md/sm cuando se elige en el menú
document.querySelectorAll('[data-show="opciones-sm"]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const box = document.getElementById('opciones-responsive');
    box.classList.remove('d-none');
    // Cerrar offcanvas si está abierto
    const offcanvasEl = document.getElementById('offcanvasNav');
    const off = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (off) off.hide();
    // Desplazar al bloque
    box.scrollIntoView({behavior: 'smooth', block: 'start'});
  });
});

// En lg, al hacer click en "Opciones" solo hace scroll al sidebar
document.querySelectorAll('[data-show="opciones-lg"]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const sidebar = document.querySelector('aside');
    if (sidebar) sidebar.scrollIntoView({behavior: 'smooth', block: 'start'});
  });
});
