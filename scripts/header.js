//id="popup" class="popup"
//função abre e fecha img popup



function sandTog(){
   
    let lista=document.getElementById('sandLista');
    lista.classList.toggle('sandLista')
    lista.classList.toggle('sandLista2')
}





window.onscroll = function() {onScrollHeader()}
//function() {myFunction()}


let height = screen.height - 50;

function onScrollHeader() {
    if (document.body.scrollTop >height || document.documentElement.scrollTop > height) {
        document.querySelector("main").classList.add("body")

        /* let remove = document.querySelectorAll(".controleOnscroll1");
            remove.forEach((iten)=>{
            iten.classList.add('remover');
        }) */

        document.querySelector(".controleOnscroll2").classList.add('sticky');
        document.querySelector(".controleOnscroll1").classList.add('sticky1');
    } else {
        document.querySelector("main").classList.remove("body")

        /* let remove = document.querySelectorAll(".controleOnscroll1");
            remove.forEach((iten)=>{
            iten.classList.remove('remover');
        }) */

        document.querySelector(".controleOnscroll2").classList.remove('sticky');
        document.querySelector(".controleOnscroll1").classList.remove('sticky1');
    }
}


//API Via Cep - https://viacep.com.br/

/* function pesquisaCep() {
    let dadosCep = window.prompt("Digite o seu CEP sem o  simbolo -")
    
    let endPointCep = `https://viacep.com.br/ws/${dadosCep}/json/`;

    let configuracaoRequisicao = {
    method: 'GET',
    }
    
    fetch(endPointCep, configuracaoRequisicao).then(
        resultado=>{
            return resultado.json();
    }).then(
        resultado =>{
            document.querySelector(".textoAlteradoHeader5").innerHTML = `
             Ofertas para: ${resultado.localidade} - ${resultado.uf}`
        }).catch(
        erro=>{
            console.log(erro); 
        });
} */