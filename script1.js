const formulario = document.getElementById("formulario"); 

formulario.addEventListener("submit", function(event) { 
    event.preventDefault(); 
    
    let nombre = document.getElementById("nombre").value.trim(); 
    let correo = document.getElementById("correo").value.trim(); 
    let telefono = document.getElementById("telefono").value.trim(); 
    let mensaje = document.getElementById("mensaje").value.trim(); 
    let respuesta = document.getElementById("respuesta"); 
    
    // Validación para asegurar que ningún campo esté vacío
    if (nombre === "" || correo === "" || telefono === "" || mensaje === "") { 
        respuesta.textContent = "❌ Por favor, completa todos los campos requeridos."; 
        respuesta.style.color = "#c0392b"; // Rojo alerta
    } else { 
        // Mensaje de éxito limpio
        respuesta.textContent = "✨ ¡Excelente " + nombre + "! Formulario validado en esta demostración. No se envió ningún mensaje. Teléfono indicado: " + telefono + "."; 
        respuesta.style.color = "#27ae60"; // Verde éxito
        formulario.reset(); 
    } 
});
