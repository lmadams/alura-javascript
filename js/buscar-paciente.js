var btnAddRest = document.querySelector("#buscar-pacientes");

btnAddRest.addEventListener("click", function() {
    console.log('Buscando clientes...');

    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function () {
        var erroHtml = document.querySelector('#erro-ajax');
        console.log(erroHtml);
        if (xhr.status === 200) {
            erroHtml.classList.add('invisivel');
            var response = xhr.responseText;
            var pacientes = JSON.parse(response);
            console.log(pacientes);

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroHtml.classList.remove('invisivel');
        }
    });
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();
});