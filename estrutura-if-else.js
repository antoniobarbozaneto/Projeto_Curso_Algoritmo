var v1, v2, res, op;

function acaoBotao(params) {

    v1 = prompt("Digite o 1 valor:")
    op = prompt("Digite a Operação, Exemplo: +, -, *, /")
    v2 = prompt("Digite o 2 valor:")

    if (op == "+") {
        res = parseInt(v1) + parseInt(v2);
    }
    else {
        if (op == "-") {
            res = parseInt(v1) - parseInt(v2);
        }
        else {
            if (op == "*") {
                res = parseInt(v1) * parseInt(v2);
            }
            else {
                if (op == "/") {
                    res = parseInt(v1) / parseInt(v2);
                }
            }
        }
    }
    document.getElementById("paragrafo").innerText = res;
}