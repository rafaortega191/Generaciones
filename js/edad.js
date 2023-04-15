document.getElementById('btnMostrarEdad').addEventListener('click', function() {
    // Obtener el valor de la edad ingresada en el formulario
    const edad = document.getElementById('edad').value;

    // Verificar si la edad es mayor a 18 años y mostrar un mensaje
    
    if (parseInt(edad) > 18) {
        alert('Es mayor de edad');
    } else {
        alert('No es mayor de edad');
    }
});