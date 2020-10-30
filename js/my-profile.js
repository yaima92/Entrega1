var contenido = JSON.parse(localStorage.getItem("list"));//Obtengo datos de localStorage.
var list = "";
var cantidad = 0;
if (contenido != null && contenido.length > 0) {
    cantidad = contenido.length;
    contenido.forEach(producto => {
        list += "<li>" + producto.nombre + " -- $ " + producto.phone + "</li>";
    });
} else {
    list += "<div class='alert alert-warning'> El carrito está vacío </div>";

}
document.getElementsByClassName('nombre').innerHTML = list;
document.getElementsByClassName('phone').innerHTML = cantidad;



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});