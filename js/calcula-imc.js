// Titulo da aplicacao
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// Calculo de IMC
var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
    var tdPeso = pacientes[i].querySelector(".info-peso");
    var tdAltura = pacientes[i].querySelector(".info-altura");

    var tdImc = pacientes[i].querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000 ) {
        console.log('Peso invalido');
        tdImc.textContent = 'Peso invalido';
        pesoEhValido = false;

        pacientes[i].classList.add('paciente-invalido');
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log('Altura invalida');
        tdImc.textContent = 'Altura invalida';
        alturaEhValida = false;

        pacientes[i].classList.add('paciente-invalido');
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso/(altura * altura);
    return imc.toFixed(2);
}
