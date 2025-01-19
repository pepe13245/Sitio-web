function eliminarDivSiEsNecesario() {
    const div = document.getElementById("miDiv");

    // Verifica si el ancho de la pantalla es menor o igual a 400px
    if (window.innerWidth <= 400 && div) {
        div.remove();
    }
}

// Llama a la función una vez para verificar el ancho inicial de la pantalla
eliminarDivSiEsNecesario();

// Escucha los cambios de tamaño de la ventana y vuelve a verificar
window.addEventListener("resize", eliminarDivSiEsNecesario);