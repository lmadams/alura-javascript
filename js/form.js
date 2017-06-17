// Evento para adicionar novo elemento
var buttonAdicionar = document.querySelector("#adicionar-paciente");

buttonAdicionar.addEventListener('click', function (e) {
    e.preventDefault();

    // Informações do form
    var form = document.querySelector('#form-adiciona');
    var paciente = obtemPacienteDoform(form);

    // Elemento tr
    var trPaciente = montaTr(paciente);

    // Tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(trPaciente);

    form.reset();
});

function obtemPacienteDoform(form) {
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
