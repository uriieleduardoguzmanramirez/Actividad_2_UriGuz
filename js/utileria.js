"use strict";

function validarCorreo(correo) {
    if (typeof correo !== "string") {
        return false;
    }

    let correoLimpio = correo.trim();

    if (correoLimpio === "") {
        return false;
    }

    let expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    return expresionCorreo.test(correoLimpio);
}


function soloLetras(texto) {
    if (typeof texto !== "string") {
        return false;
    }

    let textoLimpio = texto.trim();

    if (textoLimpio === "") {
        return false;
    }

    let expresionLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;

    return expresionLetras.test(textoLimpio);
}


function validarLongitud(numero, maxLongitud) {
    if (numero === null || numero === undefined) {
        return false;
    }

    let numeroTexto = String(numero).trim();

    if (numeroTexto === "") {
        return false;
    }

    if (!/^\d+$/.test(numeroTexto)) {
        return false;
    }

    return numeroTexto.length <= maxLongitud;
}

function calcularEdad(fechaNacimiento) {
    if (!fechaNacimiento) {
        return -1;
    }

    let fecha = new Date(fechaNacimiento);
    let hoy = new Date();

    if (isNaN(fecha.getTime())) {
        return -1;
    }

    if (fecha > hoy) {
        return -1;
    }

    let edad = hoy.getFullYear() - fecha.getFullYear();
    let mesActual = hoy.getMonth();
    let mesNacimiento = fecha.getMonth();
    let diaActual = hoy.getDate();
    let diaNacimiento = fecha.getDate();

    if (
        mesActual < mesNacimiento ||
        (mesActual === mesNacimiento && diaActual < diaNacimiento)
    ) {
        edad--;
    }

    return edad;
}


function esMayorDeEdad(fechaNacimiento) {
    let edad = calcularEdad(fechaNacimiento);

    return edad >= 18;
}

function validarPassword(password) {
    if (typeof password !== "string") {
        return false;
    }

    let expresionPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~]).{8,}$/;

    return expresionPassword.test(password);
}


function validarTelefono(telefono) {
    if (telefono === null || telefono === undefined) {
        return false;
    }

    let soloDigitos = String(telefono).replace(/\D/g, "");

    return soloDigitos.length === 10;
}


function formatearNombre(nombre) {
    if (typeof nombre !== "string") {
        return "";
    }

    let nombreLimpio = nombre.trim().replace(/\s+/g, " ").toLowerCase();

    if (nombreLimpio === "") {
        return "";
    }

    let palabras = nombreLimpio.split(" ");

    let nombreFormateado = palabras.map(function(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });

    return nombreFormateado.join(" ");
}
