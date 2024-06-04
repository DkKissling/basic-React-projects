// Función para activar el modo básico
function activarModoBasico() {
    // Eliminar todos los estilos CSS
    var styles = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < styles.length; i++) {
        styles[i].parentNode.removeChild(styles[i]);
    }

    // Eliminar todas las imágenes
    var images = document.querySelectorAll('img');
    for (var j = 0; j < images.length; j++) {
        images[j].parentNode.removeChild(images[j]);
    }
}

// Llama a la función para activar el modo básico
activarModoBasico();
