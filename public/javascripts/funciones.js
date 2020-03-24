$(function(){
    $('#btn').click(function(){
      alert("Hola Mundo");
      $.ajax({
        type: 'GET',
        data: {},
        contentType: "application/json",
        url: 'https://localhost:3000/estudiantes/Ordenar',
        success: function(respuestaServidor){
            alert("Los datos fueron descargados");
        },
        error: function(error){
            Console.log(error);
        }
      });
    })
})