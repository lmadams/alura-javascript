var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var tdImc = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000 ) {
    console.log('Peso invalido');
    tdImc.textContent = 'Peso invalido';
    pesoEhValido = false;
}

if (altura <= 0 || altura >= 3.00) {
    console.log('Altura invalida');
    tdImc.textContent = 'Altura invalida';
    alturaEhValida = false;
}

if (alturaEhValida && pesoEhValido) {
    var imc = peso/(altura * altura);
    tdImc.textContent = imc;
}

