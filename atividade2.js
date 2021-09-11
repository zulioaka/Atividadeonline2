var datadoevento 
var idade 
var listadeparticipantes 

datadoevento = 19
idade = 25
listadeparticipantes = 75

if (datadoevento >=11){
    console.log (datadoevento + " é uma data válida, Digite Sua idade");

}
else {
console.log (datadoevento + " é uma data invalida, operação finalizada.");
}

if (idade >=18){
    console.log ("Idade permitida, continuar cadastro")
}
else {
    console.log ("Idade não permitida!!!")
}
if (listadeparticipantes > 100){
    console.log ("Limite de participantes excedido, Finalizando operação")
}
else {
    console.log ("Finalizando e confirmando cadastro")
}

console.log ("fim")