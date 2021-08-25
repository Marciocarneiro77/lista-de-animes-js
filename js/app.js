function CarregarAnimes() {
    let objetoAnimes = [
        {
            foto:"cavaleiros.jpg",
            nome: "Os cavaleiros do zodiaco"
        },
        {
            foto:"dragon.jpg",
            nome:"Dragon Ball Z"
        },
        {
            foto:"shurato.jpg",
            nome:"Shurato"
        }
    ]
    let listaAnimes = document.querySelector(".lista-animes");
    let cartao = "";
    for (let i = 0; i<objetoAnimes.length;i++){
        cartao +="<div class='cartao'>";
        cartao +="<img src='img/" + objetoAnimes[i].foto + "'>";
        cartao +=objetoAnimes[i].nome;
        cartao +="</div>"
    }
    listaAnimes.innerHTML =cartao;
    
}

window.onload = function(){
    CarregarAnimes();
}