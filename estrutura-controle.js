var nome, n1, n2;

nome = prompt("Digite seu nome: ");
n1 = prompt("informe a primeira nota: ");
n2 = prompt("informe a segunda nota: ");

media = (parseInt(n1) + parseInt(n2)) / 2

if (media >= 50) {
    alert(nome + ", voce foi aprovado! com média: " + media);
}
else {
    alert(nome + ", você foi reprovado! com média: " + media);
}