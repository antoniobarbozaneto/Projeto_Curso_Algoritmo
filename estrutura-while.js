
var nome, idade, limite, cont = 0;

function acaoBotaoVIdade(params) {
    limite = prompt("Informe quantas idades serão verificadas:")

    while (cont < limite) {
        nome = prompt("Informe seu nome:")
        idade = prompt("Informe sua idade: ")

        if (idade < 18) {
            alert(nome + ", você ainda é menor de idade!")
        }
        else {
            alert(nome + ", você já é maior de idade")
        }
        alert("Ok para continuar")
        cont++;
    }

}