function showArticlesList(cartList){

    let htmlContentToAppend = "";
    for(let i = 0; i < cartList.articles.length; i++){
        let cartArticles = cartList.articles[i];

            htmlContentToAppend += `
            <tr>
             <td scope="col">
             <img width=100 src="${cartArticles.src}" class="img-thumbnail">
             </td>
             <td stcope="col"><strong> `+ cartArticles.name +`</strong></td>
             <td scope="col" id="productCostInput">`+ cartArticles.currency +``+ cartArticles.unitCost +`</td>
             <td scope="col"><input type="number" class="form-control" onchange="calcular(${i}, ${cartArticles.unitCost})" id="productCountInput${i}" placeholder="" required="" value="0" min="0"></th>
             <td scope="col"><strong id="subtotal${i}" onchange="calcularSubtotal(${i})"</strong></th>
             <td scope="col"><button id="boton-vaciar" type="button" class="borrar-produto btn btn-danger" data-id="${cartArticles.id}">X</button></td>
             </tr>
            `            
        }
        document.getElementById("articulos").innerHTML = htmlContentToAppend;
    };

    function calcular(i, costoUnitario){
        var cantidad = document.getElementById('productCountInput' + i).value; 
        var total = costoUnitario * cantidad;
        document.getElementById('subtotal'+i).innerHTML=total; 
    }
    
    
    
    
    let productCost = 0;
    let productCount = 0;
    let comissionPercentage = 15;
    let MONEY_SYMBOL = "$";
    let DOLLAR_CURRENCY = "Dólares (USD)";
    let PESO_CURRENCY = "Pesos Uruguayos (UYU)";
    let DOLLAR_SYMBOL = "USD ";
    let PESO_SYMBOL = "UYU ";
    let PERCENTAGE_SYMBOL = '%';
    let SUCCESS_MSG = "¡Se ha realizado la publicación con éxito! :)";
    let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";

    function calcular(i, costoUnitario){
        var cantidad = document.getElementById('productCountInput' + i).value; 
        var total = costoUnitario * cantidad;
        document.getElementById('subtotal'+i).innerHTML=total; 
        for(let i = 0; i < cartList.articles.length; i++){
            document.getElementById('productCostText').innerHTML=total + total;
        }

    


    let unitCostToShow = MONEY_SYMBOL + total.toFixed(2);
    let comissionToShow = MONEY_SYMBOL + (Math.round(( total * 15)/ 100).toFixed(2));
    let totalCostToShow = MONEY_SYMBOL + Math.round((total + (total * 15)/ 100)).toFixed(2);

    unitProductCostHTML.innerHTML = unitCostToShow;
    comissionCostHTML.innerHTML = comissionToShow;
    totalCostHTML.innerHTML = totalCostToShow;
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.*/
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            cartList = resultObj.data;
            //Muestro los comentarios ordenados
            showArticlesList(cartList);
    }

    document.getElementById("premium").addEventListener("change", function(){
        comissionPercentage = 0.15;
        calcular();
    });
    
    document.getElementById("express").addEventListener("change", function(){
        comissionPercentage = 0.07;
        calcular();
    });

    document.getElementById("standard").addEventListener("change", function(){
        comissionPercentage = 0.05;
        calcular();
    });

    document.getElementById("productCurrency").addEventListener("change", function(){
        if (this.value == DOLLAR_CURRENCY)
        {
            MONEY_SYMBOL = DOLLAR_SYMBOL;
        } 
        else if (this.value == PESO_CURRENCY)
        {
            MONEY_SYMBOL = PESO_SYMBOL;
        }

        calcular();
    });

});
});

