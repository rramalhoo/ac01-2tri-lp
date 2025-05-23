function Calcular(){
    let Carro=parseFloat(document.getElementById("Carro").value)
    let Distância=parseFloat(document.getElementById("Distância").value)
    let Horas=parseFloat(document.getElementById("Horas").value)
    let Dia=parseFloat(document.getElementById("Dia").value)
    let Total = 0

    if(Carro == 1 && Distância <= 100 && Horas == 1 && Dia <=7){
        Total = (Distância*2.5)*1.20
    }
    if(Carro == 1 && Distância > 100 && Horas == 1 && Dia <=7){
        Total = ((Distância*2.5)*1.20) + 50
    }
    if(Carro == 1 && Distância <= 100 && Horas == 2 && Dia <=5){
        Total = (Distância*2.5)*1.15
    }
    if(Carro == 1 && Distância > 100 && Horas == 2 && Dia <=5){
        Total = ((Distância*2.5)*1.15) + 50
    }
    if(Carro == 1 && Distância <= 100 && Horas == 3 && Dia == 7){
        Total = (Distância*2.5)*0.9
    }
    if(Carro == 1 && Distância > 100 && Horas == 3 && Dia == 7){
        Total = ((Distância*2.5)*0.9) + 50
    }
    if(Carro == 2 && Distância <= 100 && Horas == 1 && Dia <=7){
        Total = (Distância*4.5)*1.20
    }
    if(Carro == 2 && Distância > 100 && Horas == 1 && Dia <=7){
        Total = ((Distância*4.5)*1.20) + 50
    }
    if(Carro == 2 && Distância <= 100 && Horas == 2 && Dia <=5){
        Total = (Distância*4.5)*1.15
    }
    if(Carro == 2 && Distância > 100 && Horas == 2 && Dia <=5){
        Total = ((Distância*4.5)*1.15) + 50
    }
    if(Carro == 2 && Distância <= 100 && Horas == 3 && Dia == 7){
        Total = (Distância*4.5)*0.9
    }
    if(Carro == 2 && Distância > 100 && Horas == 3 && Dia == 7){
        Total = ((Distância*4.5)*0.9) + 50
    }
    if(Carro == 3 && Distância <= 100 && Horas == 1 && Dia <=7){
        Total = (Distância*7.8)*1.20
    }
    if(Carro == 3 && Distância > 100 && Horas == 1 && Dia <=7){
        Total = ((Distância*7.8)*1.20) + 50
    }
    if(Carro == 3 && Distância <= 100 && Horas == 2 && Dia <=5){
        Total = (Distância*7.8)*1.15
    }
    if(Carro == 3 && Distância > 100 && Horas == 2 && Dia <=5){
        Total = ((Distância*7.8)*1.15) + 50
    }
    if(Carro == 3 && Distância <= 100 && Horas == 3 && Dia == 7){
        Total = (Distância*7.8)*0.9
    }
    if(Carro == 3 && Distância > 100 && Horas == 3 && Dia == 7){
        Total = ((Distância*7.8)*0.9) + 50
    }
    if(Horas == 3 && Dia <=6){
        alert("A tarifa de baixíssima demanda é somente no dia 7 (Domingo)")
    }
    if(Carro <=0 || Carro > 3 || Distância <=0 || Horas <=0 || Horas > 3 || Dia <=0 || Dia > 7){
        alert("Valores inválidos! Por favor insira um número de acordo com as informações pedidas abaixo.")
    }
    document.getElementById("resposta1").innerHTML=`O valor total da viagem foi de R$${Total.toFixed(2)}`
}



function ex2() {
    let situacaoSaldo = parseFloat(document.getElementById("situacaoSaldo").value)
    let valorCredito

    if (situacaoSaldo <= 13000) {
        valorCredito = 0.20
    }
    else if (situacaoSaldo > 1300 && situacaoSaldo <= 3000) {
        valorCredito = 0.30
    }
    else if (situacaoSaldo > 3000 && situacaoSaldo <= 8000) {
        valorCredito = 0.45
    }
    else if (situacaoSaldo > 8000 && situacaoSaldo <= 10000) {
        valorCredito = 0.50
    } else {
        valorCredito = 0.60
    }

    valorFinal = situacaoSaldo * valorCredito

    document.getElementById("resposta2").innerHTML = `O valor com Crédito é R$` + valorFinal
}



function ex3() {
  let altura = parseFloat(document.getElementById("altura").value)
  let peso = parseFloat(document.getElementById("peso").value)
  let imc = peso / (altura * altura)
  let resultadoConta = ''


  if (imc < 18.5) {
    resultadoConta = `Seu IMC é ${imc.toFixed(2)}, voce está abaixo do peso.`
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultadoConta = `Seu IMC é ${imc.toFixed(2)}, voce está com peso normal.`
  } else if (imc >= 25 && imc <= 29.9) {
    resultadoConta = `Seu IMC é ${imc.toFixed(2)}, voce esta com sobrepeso.`
  } else if (imc >= 30) {
    resultadoConta = `Seu IMC é ${imc.toFixed(2)}, voce esta com obesidade.`
  }


  document.getElementById("resposta3").innerHTML = resultadoConta
}
