//No exercicio 1 a primeira linha de console ira mostrar apenas 10 (b), 
//já na segunda linha tera 10 (a) e 15 (10+5)

//No segundo exercicio todos os números acabaram abc acabam como 10

//No terceiro exercicio tem um calculo de quanto a pessoa recebe por hora
//após dividir o resultado do trabalho por dia e o salário você recebe o 
//total por horas

let nome = null 
let idade = null
console.log(typeof nome)
console.log(typeof idade)
//Os dois códigos acabaram sem nada pelo uso de null
nome = prompt("Qual seu nome:")
idade = prompt("Qual sua idade:")
console.log("Olá " ,nome,  "você tem " ,idade, " de idade.")
//Constantes não podem ser mudadas, somente let

const chuva = prompt("Está chovendo hoje?")
const jogo = prompt("Tem brasileirão hoje?")
const celular = prompt("Você tem seu celular com você?")
console.log(chuva, jogo, celular)

let a = 10
let b = 25
c = a //10
a = b // 25
b = c // 10
console.log("O valor de a é ", a)
console.log("O valor de  b é", b)

const numero1 = Number(prompt("Insíra o primeiro número:"))
const numero2 = Number(prompt("Insírua o segundo número:"))
console.log("O resultado dos 2 números somado é ", numero1+numero2)
console.log("O resultado dos 2 números multiplicados é", numero1*numero2)