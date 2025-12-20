// gallery.js - inicjalizacja GLightbox i drobne opcje
document.addEventListener('DOMContentLoaded', function(){
if(window.GLightbox){
const lightbox = GLightbox({
selector: '.glightbox',
touchNavigation: true,
loop: true,
zoomable: true,
plyr: {css: '', js: ''}
});
}
});