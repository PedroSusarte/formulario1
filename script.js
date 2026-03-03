const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function() {

    const operacao = document.getElementById("operacao").value;

    const numero = parseFloat(document.getElementById("numero").value);

    let resultado;

    if (operacao == "quadrado") {
        resultado = numero * numero;
    } else {
        resultado = numero * numero * numero;
    }

    document.getElementById("resultado").textContent = resultado;
});
