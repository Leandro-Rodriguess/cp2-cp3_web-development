// ==========================================
// MANIPULAÇÃO DO DOM - CidadeFit - ACADEMIA INTELIGENTE
// ==========================================

function Mudar() {
    let novo = document.getElementById("nome");
    let titulo = document.getElementById("titulo");
    
    if (novo.value.trim() !== "") {
       
        titulo.innerHTML = "CidadeFit Tech - Aluno: ${novo.value}";
    }
}

function inserir() {
    
    let posicaoInput = document.getElementById("posicao").value
- 1;
    let novoEquipamento = document.getElementById("novo").value;
    
   
    let elementosEquipamentos = document.getElementsByClassName("time");
    
    if (posicaoInput >= 0 && posicaoInput < elementosEquipamentos.length && novoEquipamento.trim() !== "") {
        elementosEquipamentos[posicaoInput].innerHTML = novoEquipamento;
        document.getElementById("novo").value = ""; 
    } else {
        ("Posição inválida ou campo vazio!");
    }
}


let botao = document.querySelector("#btnImagem");
let container = document.querySelector("#containerImagem");

botao.addEventListener("click", function () {
    if (document.getElementById("minhaImagem")) {
        alert("A imagem do treino já foi criada!");
        return;
    }
    
    let novaImg = document.createElement("img");
    novaImg.id = "minhaImagem";
   
    novaImg.src = "./assets/Imagem.jpg";
    novaImg.alt = "Imagem ilustrativa do treino";

    novaImg.style.width = "100%";
    novaImg.style.maxWidth = "400px";
    novaImg.style.borderRadius = "10px";
    novaImg.style.marginTop = "15px";
    novaImg.style.display = "block";

    container.appendChild(novaImagem);
});