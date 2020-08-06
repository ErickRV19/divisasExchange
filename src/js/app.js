var hours = document.getElementById("hora");
var date = document.getElementById("fecha");
var dolar = document.getElementById("dolar");
var euro = document.getElementById("euro");
var libra = document.getElementById("libra");
var yen = document.getElementById("yen");

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
        });
    fetch("https://api.exchangeratesapi.io/latest?base=EUR")
        .then((respuesta) => respuesta.json())
        .then((response) => {
            euro.innerHTML = response.rates.MXN;
        });
    fetch("https://api.exchangeratesapi.io/latest?base=GBP")
        .then((respuesta) => respuesta.json())
        .then((response) => {
            libra.innerHTML = response.rates.MXN;
        });
    fetch("https://api.exchangeratesapi.io/latest?base=JPY")
        .then((respuesta) => respuesta.json())
        .then((response) => {
            yen.innerHTML = response.rates.MXN;
        });
}

window.onload = function() {
    hours.innerHTML = hora;
    date.innerHTML = fecha;
    generar();
};