var nome, n1, n2;

passou = false;// tipo boleana.

nome = prompt("Digite seu nome: ");
n1 = prompt("informe a primeira nota: ");
n2 = prompt("informe a segunda nota: ");

media = (parseInt(n1) + parseInt(n2)) / 2

if (media >= 50) {
    passou = true;
}
if (passou && media >= 70) // se passou True E media maior que 70 
{
    alert("Aprovado! " + nome);
}
else {
    alert("Reprovado!" + nome);
}