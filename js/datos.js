document.getElementById('btnMostrarDatos').addEventListener('click', function() {
    // Obtener los valores ingresados en el formulario
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const anioNacimiento = document.getElementById('anioNacimiento').value;

    // Crear una cadena de texto con todos los datos
    const datos = 'Nombre: ' + nombre +
                  '\nEdad: ' + edad +
                  '\nDNI: ' + dni +
                  '\nSexo: ' + sexo +
                  '\nPeso: ' + peso +
                  '\nAltura: ' + altura +
                  '\nAño de Nacimiento: ' + anioNacimiento;

    // Mostrar los datos en un cuadro de diálogo de alerta
    alert(datos);
});