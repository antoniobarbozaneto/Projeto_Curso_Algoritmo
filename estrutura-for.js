
var num, fat, cont;

function acaoBotaoFat(params) {

    num = prompt("Informe o número para calcular o fatorial: ")
    fat = 1;

    for (cont = 1; cont <= num/*ex.:até 5*/; cont++) {
        fat = fat * cont;
    }
    //1 * 1 = 1
    //(fat)1*2 = 2
    //(fat)2*3 =6
    //(fat)6*4 = 24
    //(fat)24*5 = 120
    document.getElementById("pfatorial").innerText = fat;
}