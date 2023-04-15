document.getElementById('generacionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const dni = document.getElementById('dni').value;
    const sexo = document.getElementById('sexo').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const anioNacimiento = document.getElementById('anioNacimiento').value;

    const persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
    persona.mostrarGeneracion();


  });
  