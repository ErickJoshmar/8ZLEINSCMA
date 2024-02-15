document.addEventListener('DOMContentLoaded', function () {
    var boton = document.getElementById("boton");
    boton.onclick = function () {
        validarInversion();
        validarTasaInteres();
        validarPeriodos();
    }
});

function validarInversion() {
    var inversion = document.getElementById("inversion").value;
    var mensajeInversion = document.getElementById("mensajeInversion");
    mensajeInversion.innerHTML = "";

    if (inversion === "") {
        mensajeInversion.innerHTML = "Campo vacío";
    } else if (isNaN(inversion)) {
        mensajeInversion.innerHTML = "Debe ser un número";
    }
}

function validarTasaInteres() {
    var tasaInteres = document.getElementById("tasaInteres").value;
    var mensajeTasa = document.getElementById("mensajeTasa");
    mensajeTasa.innerHTML = "";

    if (tasaInteres === "") {
        mensajeTasa.innerHTML = "Selecciona una opción";
    }
}

function validarPeriodos() {
    var periodos = document.getElementById("periodos").value;
    var mensajePeriodos = document.getElementById("mensajePeriodos");
    mensajePeriodos.innerHTML = "";

    if (periodos === "") {
        mensajePeriodos.innerHTML = "Campo vacío";
    } else if (isNaN(periodos)) {
        mensajePeriodos.innerHTML = "Debe ser un número";
    } else {
        calcularInteresCompuesto();
    }
}

function calcularInteresCompuesto() {
    var inversion = parseFloat(document.getElementById("inversion").value);
    var tasaInteres = parseFloat(document.getElementById("tasaInteres").value);
    var periodos = parseFloat(document.getElementById("periodos").value);

    var interesCompuesto = inversion * Math.pow(1 + (tasaInteres / 100), periodos);
    var mensajeResultado = document.getElementById("mensajeResultado");
    mensajeResultado.innerHTML = "El resultado del cálculo es: $" + interesCompuesto.toFixed(2);
}
