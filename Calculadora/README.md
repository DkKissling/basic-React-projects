# Calculadora con React

Esta es una aplicación simple de calculadora construida con React, utilizando los hooks useState y useEffect.

## Características

- Realiza operaciones básicas: suma, resta, multiplicación y división.
- Muestra el historial de operaciones realizadas.
- Permite borrar el último dígito ingresado o limpiar completamente la entrada.

## Tecnologías utilizadas

- React
- HTML
- CSS
- JavaScript

## Hooks utilizados

### useState

El hook `useState` se utiliza para manejar el estado de la calculadora, incluyendo:

- El valor actual mostrado en la pantalla.
- El historial de operaciones realizadas.

### useEffect

El hook `useEffect` se utiliza para realizar ciertas tareas después de que se renderice el componente. En este caso, se utiliza para:

- Actualizar el título de la página con el valor actual de la calculadora.
- Actualizar el historial de operaciones en el navegador cuando se realiza una nueva operación.

## Instalación y ejecución

1. Clona este repositorio: `git clone https://github.com/tu-usuario/calculadora-react.git`
2. Navega al directorio del proyecto: `cd calculadora-react`
3. Instala las dependencias: `npm install`
4. Inicia la aplicación: `npm start`
5. Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en tu navegador.

## Contribución

Si deseas contribuir a este proyecto, puedes seguir estos pasos:

1. Crea un fork de este repositorio.
2. Crea una rama nueva: `git checkout -b feature/nueva-funcionalidad`
3. Realiza tus cambios y haz commit: `git commit -m 'Agrega nueva funcionalidad'`
4. Envía tus cambios al repositorio remoto: `git push origin feature/nueva-funcionalidad`
5. Crea un Pull Request en este repositorio.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
