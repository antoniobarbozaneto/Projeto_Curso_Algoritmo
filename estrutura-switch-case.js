var v1, v2, res, op;

function acaoBotao(params) {

    v1 = prompt("Digite o primeiro valor:")
    op = prompt("Digite a Operação, Exemplo: +, -, *, /")
    v2 = prompt("Digite o segundo valor:")

    switch (op) {
        case "+":
            res = parseInt(v1) + parseInt(v2);
            break;
        case "-":
            res = parseInt(v1) - parseInt(v2);
            break;
        case "*":
            res = parseInt(v1) * parseInt(v2);
            break;
        case "/":
            res = parseInt(v1) / parseInt(v2);
            break;
        //    default:
        //        break;
    }
    document.getElementById("pcalculadora").innerText = res;
}