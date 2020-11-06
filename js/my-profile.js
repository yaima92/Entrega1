var contenido = JSON.parse(localStorage.getItem("list"));//Obtengo datos de localStorage.
var list = "";
var cantidad = 0;
if (contenido != null && contenido.length > 0) {
  cantidad = contenido.length;
  contenido.forEach(producto => {
    list += `<div class="nombre"><strong>Nombre:</strong> ` + producto.nombre + ` ` + producto.snombre + ` ` + producto.papellido + ` ` + producto.sapellido + `</div>
        <div><strong>Fecha de nacimiento:</strong> `+ producto.fecha + `</div>
        <div><strong>Correo Electrónico:</strong> `+ producto.email + `</div>
        <div><strong>Teléfono:</strong> `+ producto.phone + `</div>
        `
  });
}
document.getElementById('info').innerHTML = list;

//declarando los elementos de html

const imgDiv = document.querySelector('.avatar');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');


//usuario mousehover de img
imgDiv.addEventListener('load',function(){
  localStorage.imagen = imgDiv.src;
});
imgDiv.addEventListener('mouseenter', function () {
  uploadBtn.style.display = "block"
});

//usuario hover out de la img
imgDiv.addEventListener('mouseleave', function () {
  uploadBtn.style.display = "none"
});

//cuando elegimos cambiar la foto

file.addEventListener('change', function () {
  const choosedFile = this.files[0];

  if (choosedFile) {
    const reader = new FileReader();

    reader.addEventListener('load', function () {
      img.setAttribute('src', reader.result);
    });

    reader.readAsDataURL(choosedFile);
  }
});