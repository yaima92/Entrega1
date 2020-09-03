var commentArray = [];

document.getElementById("spinner-wrapper").style.display = "block";

function showCommentList(array){
           
    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let comentario = array[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                <h4 class="mb-1">`+ comentario.user +`</h4>
                </div>
                <div class="col"> 
                    <div class="d-flex w-100 justify-content-between">
                    <p class="mb-1">`+ comentario.dateTime +`</p>
                        <small class="text-muted">` + comentario.score + `</small>
                    </div>
                    <small class="text-muted">` + comentario.description + `</small>
                </div>
            </div>
        </div>
        `
        document.getElementById("comentarios").innerHTML = htmlContentToAppend;
    }
}

function enviar(){
    var comentario = document.getElementById("comment").value;
    document.getElementById("comentarios").innerHTML = commentArray.push(comentario);
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        document.getElementById("spinner-wrapper").style.display = "none";
        if (resultObj.status === "ok")
        {
            commentArray = resultObj.data;
            //Muestro las categorías ordenadas
            showCommentList(commentArray);
        }
    });
});
