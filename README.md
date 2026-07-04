# Actividad 2 - Librería utileria.js

## Portada

**Nombre:** Uriel Eduardo Guzmán Ramírez  
**Materia:** Programación Web  
**Actividad:** Librería `utileria.js`
**DOCENTE** Adelina Martinez Nieto 

## ¿Qué problema resuelve?

Esta librería ayuda a validar datos comunes en formularios web, como correos, nombres, teléfonos, fechas de nacimiento y contraseñas.

El objetivo es no repetir el mismo código en cada página y poder reutilizar las funciones en formularios, login y modal.

## Instalación

Para usar la librería se agrega el archivo JavaScript dentro del HTML:

```html
<script src="js/utileria.js"></script>
```

Ejemplo básico:

```html
<form>
    <input type="text" id="correo">
</form>

<script src="js/utileria.js"></script>
```

## Funciones principales

La librería incluye estas funciones:

```javascript
validarCorreo(correo);
soloLetras(texto);
validarLongitud(numero, maxLongitud);
calcularEdad(fechaNacimiento);
esMayorDeEdad(fechaNacimiento);
validarPassword(password);
```

También se agregaron dos funciones libres:

```javascript
validarTelefono(telefono);
formatearNombre(nombre);
```

## Ejemplos de uso
**REGISTRO DE USUARIO**

![alt text](image-6.png)

**LOGIN**
![alt text](image-7.png)
### Validar correo

Valida si el correo tiene un formato correcto.

```javascript
validarCorreo("alumno@gmail.com");
```
![alt text](image.png)
### Validar solo letras

Verifica que el texto tenga solo letras.

```javascript
soloLetras("Uriel Eduardo");
```
![alt text](image-1.png)

### Validar longitud

Revisa que un número no pase de cierta cantidad de dígitos.

```javascript
validarLongitud("12345678", 8);
```

### Calcular edad

Calcula la edad usando la fecha de nacimiento.

```javascript
calcularEdad("2000-05-10");
```

### Validar mayoría de edad

Indica si una persona tiene 18 años o más.

```javascript
esMayorDeEdad("2000-05-10");
```
![alt text](image-5.png)
### Validar contraseña

Revisa que la contraseña tenga mayúscula, minúscula, número, carácter especial y mínimo 8 caracteres.

```javascript
validarPassword("Alumno123!");
```
![alt text](image-3.png)

## Funciones libres

### Validar teléfono

Valida que el teléfono tenga 10 dígitos.

```javascript
validarTelefono("9511234567");
```
![alt text](image-4.png)


## Uso en el formulario

En el formulario de registro se usaron varias funciones de la librería para validar los datos del usuario.

Ejemplo:

```javascript
if (!validarCorreo(correo.value)) {
    errorCorreo.textContent = "Ingresa un correo válido.";
}
```

Ejemplo con edad:

```javascript
let edad = calcularEdad(fechaNacimiento.value);

if (!esMayorDeEdad(fechaNacimiento.value)) {
    errorFecha.textContent = "Debes ser mayor de edad.";
}
```

## Uso en el modal

Cuando el formulario está correcto, el modal muestra la edad calculada.

```javascript
textoModal.textContent = "Tu edad es de " + edad + " años.";
modalEdad.classList.add("activo");
```

## Uso en login.html

En el login se validan el correo y la contraseña.

```javascript
if (!validarCorreo(correoLogin.value)) {
    errorCorreoLogin.textContent = "Correo no válido.";
}

if (!validarPassword(passwordLogin.value)) {
    errorPasswordLogin.textContent = "Contraseña no válida.";
}
```

## Conclusión

Esta actividad sirvió para crear una librería JavaScript reutilizable.  
La librería permite validar datos de formularios, calcular edad y reutilizar funciones en diferentes páginas como el registro, el modal y el login.
