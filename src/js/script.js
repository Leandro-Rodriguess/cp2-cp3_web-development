
// ==========================================
// MANIPULAÇÃO DO DOM - CidadeFit - ACADEMIA INTELIGENTE
// ==========================================

function Mudar() {
    let novo = document.getElementById("nome");
    let titulo = document.getElementById("titulo");

    if (novo && titulo && novo.value.trim() !== "") {
        titulo.textContent = `CidadeFit Tech - Aluno: ${novo.value}`;
    }
}

function inserir() {
    let campoPosicao = document.getElementById("posicao");
    let campoNovo = document.getElementById("novo");

    if (!campoPosicao || !campoNovo) {
        alert("Campo de posição ou equipamento não encontrado!");
        return;
    }

    let posicaoInput = Number(campoPosicao.value) - 1;
    let novoEquipamento = campoNovo.value;

    let elementosEquipamentos = document.getElementsByClassName("time");

    if (
        Number.isInteger(posicaoInput) &&
        posicaoInput >= 0 &&
        posicaoInput < elementosEquipamentos.length &&
        novoEquipamento.trim() !== ""
    ) {
        elementosEquipamentos[posicaoInput].textContent = novoEquipamento;
        campoNovo.value = "";
    } else {
        alert("Posição inválida ou campo vazio!");
    }
}

// ==========================================
// CRIAR IMAGEM DO TREINO
// ==========================================

let botao = document.querySelector("#btnImagem");
let container = document.querySelector("#containerImagem");

if (botao && container) {
    botao.addEventListener("click", function () {

        if (document.getElementById("minhaImagem")) {
            alert("A imagem do treino já foi criada!");
            return;
        }

        let novaImg = document.createElement("img");
        novaImg.id = "minhaImagem";

        novaImg.src = "./Imagem.jpg";
        novaImg.alt = "Imagem ilustrativa do treino";

        novaImg.style.width = "100%";
        novaImg.style.maxWidth = "400px";
        novaImg.style.borderRadius = "10px";
        novaImg.style.marginTop = "15px";
        novaImg.style.display = "block";

        container.appendChild(novaImg);
    });
}
