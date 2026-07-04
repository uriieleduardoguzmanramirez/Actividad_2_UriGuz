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

<img width="402" height="650" alt="image" src="https://github.com/user-attachments/assets/da4a0819-a2ed-43f2-b3cd-b2a0d445b4c5" />

**LOGIN**

<img width="536" height="587" alt="image" src="https://github.com/user-attachments/assets/984c38dd-777b-49ae-a592-4a64200d3991" />

### Validar correo

Valida si el correo tiene un formato correcto.

```javascript
validarCorreo("alumno@gmail.com");
```
<img width="410" height="90" alt="image" src="https://github.com/user-attachments/assets/c4893acc-0035-4a2e-b04f-ffa1142b0ee4" />

### Validar solo letras

Verifica que el texto tenga solo letras.

```javascript
soloLetras("Uriel Eduardo");
```
<img width="381" height="86" alt="image" src="https://github.com/user-attachments/assets/11645a36-9eae-41d4-8ee8-89a9aa7e30c4" />

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
<img width="380" height="241" alt="image" src="https://github.com/user-attachments/assets/d01f6682-ef8b-4118-8e44-95abdd2409cd" />

### Validar contraseña

Revisa que la contraseña tenga mayúscula, minúscula, número, carácter especial y mínimo 8 caracteres.

```javascript
validarPassword("Alumno123!");
```
<img width="442" height="104" alt="image" src="https://github.com/user-attachments/assets/518bb0fc-80fe-4f55-ad0d-76e5b80f6092" />


## Funciones libres

### Validar teléfono

Valida que el teléfono tenga 10 dígitos.

```javascript
validarTelefono("9511234567");
```
<img width="410" height="95" alt="image" src="https://github.com/user-attachments/assets/e17ce005-7aa5-4426-8c36-aeaefff01e8f" />


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



##link de video##




