// Carne: homen - 500gr. 
// mulher-300gr. 
// Criança- 150gr
// Cerveja:2 Litros cada
// Refri: 1 litro cada
// Carvão: 1,5 para cada 1kg de carne

let inputHomens = document.getElementById("homens");
let inputMulheres = document.getElementById("mulheres");
let inputCriancas = document.getElementById("criancas");
let inputVegetarianos = document.getElementById("vegetarianos");
let inputNaobebe = document.getElementById("naobebe");

let resultado = document.getElementById("resultado");

function calcular(){
    let homens = parseFloat(inputHomens.value);
    let mulheres = parseFloat(inputMulheres.value);
    let criancas = parseFloat(inputCriancas.value);
    let vegetarianos = parseFloat(inputVegetarianos.value);
    let naobebe = parseFloat(inputNaobebe.value);

    let qdttotalcarne = ((homens * 500) + (mulheres * 300) + (criancas * 150)) - (vegetarianos*300);
    let qdttotalcerveja = ((homens + mulheres) * 2) - (naobebe * 2);
    let qdttotalrefri = (homens + mulheres + criancas);
    let qdttotalcarvao = Math.round((qdttotalcarne * 1.5)/1000);
    
        if (inputHomens.value==""){
            resultado.innerHTML = "Completar todos os campos!";
            }
        else if (inputMulheres.value==""){
            resultado.innerHTML = "Completar todos os campos!";
            }
        else if (inputCriancas.value==""){
            resultado.innerHTML = "Completar todos os campos!";
            }
        else if (inputVegetarianos.value==""){
            resultado.innerHTML = "Completar todos os campos!";
            }
        else
            {
            resultado.innerHTML = `<p>${qdttotalcarne}g de carne.</p>`
            resultado.innerHTML += `<p>${qdttotalcerveja}L de cerveja.</p>`
            resultado.innerHTML += `<p>${qdttotalrefri}L de refrigerante.</p>`
            resultado.innerHTML += `<p>${qdttotalcarvao}kg de carvão.</p>`
            }

        }   