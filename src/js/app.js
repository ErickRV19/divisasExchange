var hours = document.getElementById("hora");
var date = document.getElementById("fecha");
var dolar = document.getElementById("dolar");
// hora y dia
var meses = new Array(
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
);
var dias = new Array(
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
);
var hoy = new Date();

var fecha =
    dias[hoy.getDay() - 1] +
    ", " +
    hoy.getDate() +
    " de " +
    meses[hoy.getMonth() - 1] +
    " del " +
    hoy.getFullYear();
var hora = " Siendo las " + hoy.getHours() + ":" + hoy.getMinutes();

function generar() {
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
        .then((respuesta) => respuesta.json())
        .then((response) => {
            dolar.innerHTML = response.rates.MXN;
            console.log(response);
            console.log(dolar);
        });
}

window.onload = function() {
    hours.innerHTML = hora;
    date.innerHTML = fecha;
    generar();
};