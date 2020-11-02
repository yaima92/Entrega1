var contenido = JSON.parse(localStorage.getItem("list"));//Obtengo datos de localStorage.
    var list = "";
    var cantidad = 0;
    if (contenido != null && contenido.length > 0) {
      cantidad = contenido.length;
      contenido.forEach(producto => {
        list += `<div class="nombre"><strong>Nombre:</strong> `+ producto.nombre +` `+ producto.snombre +` `+ producto.papellido +` `+ producto.sapellido +`</div>
        <div><strong>Fecha de nacimiento:</strong> `+ producto.fecha +`</div>
        <div><strong>Correo Electrónico:</strong> `+ producto.email +`</div>
        <div><strong>Teléfono:</strong> `+ producto.phone +`</div>
        `
      });
    }
    document.getElementById('info').innerHTML = list;



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});