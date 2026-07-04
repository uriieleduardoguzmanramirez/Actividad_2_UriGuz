"use strict";

/*
    Librería: utileria.js
    Descripción: Conjunto de funciones reutilizables para validaciones,
    cálculos y formateo de datos en formularios HTML.

    Esta librería no contiene diseño ni elementos visuales.
    Solo contiene funciones JavaScript.
*/

/*
    validarCorreo(correo) → boolean
    Valida que el correo tenga un formato correcto.
    Ejemplo válido: usuario@gmail.com
*/
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

/*
    soloLetras(texto) → boolean
    Valida que el texto contenga únicamente letras.
    Acepta mayúsculas, minúsculas, vocales acentuadas, ñ y espacios.
    Ejemplo válido: José Ángel
*/
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

/*
    validarLongitud(numero, maxLongitud) → boolean
    Valida que un número tenga como máximo cierta cantidad de dígitos.
    Ejemplo: validarLongitud(12345, 5) devuelve true.
*/
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

/*
    calcularEdad(fechaNacimiento) → número entero
    Calcula la edad a partir de una fecha de nacimiento.
    La fecha debe venir en formato YYYY-MM-DD.
    Si la fecha no es válida, devuelve -1.
*/
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

/*
    esMayorDeEdad(fechaNacimiento) → boolean
    Valida si una persona tiene 18 años o más.
*/
function esMayorDeEdad(fechaNacimiento) {
    let edad = calcularEdad(fechaNacimiento);

    return edad >= 18;
}

/*
    validarPassword(password) → boolean
    Valida que la contraseña tenga:
    - Mínimo 8 caracteres
    - Una letra mayúscula
    - Una letra minúscula
    - Un número
    - Un carácter especial
*/
function validarPassword(password) {
    if (typeof password !== "string") {
        return false;
    }

    let expresionPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>/?\\|`~]).{8,}$/;

    return expresionPassword.test(password);
}

/*
    FUNCIÓN ADICIONAL 1
    validarTelefono(telefono) → boolean
    Valida que un teléfono tenga exactamente 10 dígitos.
    Acepta espacios, guiones o paréntesis, pero solo cuenta los números.
    Ejemplo válido: 951-123-4567
*/
function validarTelefono(telefono) {
    if (telefono === null || telefono === undefined) {
        return false;
    }

    let soloDigitos = String(telefono).replace(/\D/g, "");

    return soloDigitos.length === 10;
}

/*
    FUNCIÓN ADICIONAL 2
    formatearNombre(nombre) → string
    Limpia espacios innecesarios y convierte el nombre a formato correcto.
    Ejemplo: "  juAN   péREz  " devuelve "Juan Pérez"
*/
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