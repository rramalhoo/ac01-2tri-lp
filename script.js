function ex1() {
  let tipoCarro = parseInt(document.getElementById("tipoCarro").value)
  let dia = parseInt(document.getElementById("diaSemana").value)
  let hora = parseInt(document.getElementById("horaEntrada").value)
  let minutos = parseInt(document.getElementById("minutosEntrada").value)
  let distancia = parseFloat(document.getElementById("distancia").value)

  let precoKm = 0
  if (tipoCarro === 1) {
    precoKm = 2.50
  }
  else if (tipoCarro === 2) {
    precoKm = 4.50
  } else {
    precoKm = 7.80
  }

  let preco = precoKm * distancia;

  let madrugada = hora >= 0 && hora < 6
  let horarioPico = (hora >= 6 && hora < 10) || (hora >= 17 && hora < 20)
  let domingoBaixa = dia === 7 && hora >= 15 && hora < 17
  let viagemLonga = distancia > 100

  if (madrugada) {
    preco += preco * 0.20
  }

  if (dia >= 1 && dia <= 5 && horarioPico) {
    preco += preco * 0.15
  }

  if (domingoBaixa) {
    preco -= preco * 0.10
  }

  if (viagemLonga) {
    preco += 50
  }

  document.getElementById("resposta1").innerText = "Valor total da viagem: R$ " + preco.toFixed(2)
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