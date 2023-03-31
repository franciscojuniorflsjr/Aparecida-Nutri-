var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelector(".paciente");


for (var i = 0; i < pacientes.length ; i++) {

    var paciente = pacientes[i];
   console.log(paciente[i]);
   
    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
 
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValido = true;


    if(peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!")
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!"
    }
    if(altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!")
    alturaEhValido = false;
    tdImc.textContent = "Altura inválida!"
}

    if( alturaEhValido && pesoEhValido) {
    var imc = peso / (altura * altura); 
    tdImc.textContent = imc;
}

}


