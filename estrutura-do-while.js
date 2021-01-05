
var nome, idade,resp, cont = 0;

function acaoBotaoVIdade2(params) {

    do {
        nome = prompt("Informe seu nome:")
        idade = prompt("Informe sua idade: ")

        if (idade < 18) {
            alert(nome + ", você ainda é menor de idade!")
        }
        else {
            alert(nome + ", você já é maior de idade")
        }        
        resp = prompt("Deseja sair: S/N")
    }while (resp == "N" || resp == "n")

}