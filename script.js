document.getElementById('numeroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém o valor do número digitado
    const numero = parseFloat(document.getElementById('numero').value);

    // Chama a função para calcular o quadrado
    const resultado = calcularQuadrado(numero);

    const resultado2 = calcularCubo(numero);

    // Exibe o resultado na página
    document.getElementById('resultado').textContent = resultado;

    document.getElementById('resultado2').textContent = resultado2;

});
function calcularQuadrado(numero) {
    return numero * numero;
}

function calcularCubo(numero) {
    return numero * numero * numero;
}
