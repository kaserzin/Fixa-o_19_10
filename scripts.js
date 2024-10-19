
function calcularGasto() {
    let distancia = parseFloat(document.getElementById('distancia').value);
    let consumoPorKm = 14;
    let precoCombustivel = parseFloat(document.getElementById('precoCombustivel').value);
    let gasto = (distancia / consumoPorKm) * precoCombustivel;
    document.getElementById('resultado').innerText = `João gastará R$${gasto.toFixed(2)} para percorrer ${distancia}Km.`;
}

function calcularComprimento() {
    let palavra = document.getElementById('palavra').value;
    let comprimento = palavra.length;
    document.getElementById('resultado').innerText = `A palavra "${palavra}" tem ${comprimento} caracteres.`;
}


function calcularValor() {
    let comprimento = parseFloat(document.getElementById('comprimento').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let area = comprimento * altura;
    let valorMetroQuadrado = 300;
    let valorTotal = area * valorMetroQuadrado;
    document.getElementById('resultado').innerText = `O terreno de ${comprimento}m de comprimento por ${altura}m de altura, que tem ${area}m², vale R$${valorTotal.toFixed(2)}.`;
}
