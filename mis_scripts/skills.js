  
  function animarContador(elemento, valorFinal, duracion = 1500) {
      let inicio = null;

      function paso(timestamp) {
        if (!inicio) inicio = timestamp;
        const progreso = timestamp - inicio;
        const porcentaje = Math.min(progreso / duracion, 1);
        const valorActual = Math.floor(porcentaje * valorFinal);
        elemento.textContent = valorActual;
        if (porcentaje < 1) {
          requestAnimationFrame(paso);
        }
      }

      requestAnimationFrame(paso);
    }

    // 👇 Cambiado: Solo se activa si el elemento entero es visible
    function estaEnPantalla(elemento) {
      const rect = elemento.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= window.innerHeight
      );
    }

    let animado = false;

    function verificarVisibilidad() {
      const contadores = document.querySelectorAll('.box_numero');
      const seccion = document.getElementById('contadores');

      if (!animado && estaEnPantalla(seccion)) {
        contadores.forEach(el => {
          const total = parseInt(el.dataset.total);
          animarContador(el, total);
        });
        animado = true;
      }
    }

    window.addEventListener('scroll', verificarVisibilidad);
    window.addEventListener('load', verificarVisibilidad);