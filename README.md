# Snake API

Esta API proporciona endpoints para gestionar una base de datos de serpientes. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre la base de datos `snakeDB`. Además, incluye funcionalidades de registro y inicio de sesión de usuarios.

## Requisitos

- Node.js
- MySQL
- Cuenta de usuario en la base de datos MySQL

## Instalación

1. Clona este repositorio en tu máquina local:

```
git clone https://github.com/tu-usuario/snake-api.git
```

2. Instala las dependencias del proyecto:

```
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables de entorno:

```
DB_USER=tu_usuario_mysql
DB_PASSWORD=tu_contraseña_mysql
PORT=3000
```

4. Importa la base de datos.

Ejecuta el script `snakeDB.sql` en tu base de datos MySQL para crear la base de datos y la tabla necesaria. Puedes usar cualquier cliente MySQL para importar el script.

5. Inicia el servidor:

```
npm start
```

La API estará disponible en `http://localhost:3000/`.

## Endpoints

- **GET /snakes**: Obtiene una lista de todas las serpientes en la base de datos.
- **POST /newsnake**: Agrega una nueva serpiente a la base de datos.
- **PUT /snake/:id**: Actualiza los datos de una serpiente existente.
- **DELETE /snake/:id**: Elimina una serpiente de la base de datos.
- **POST /users/register**: Registra un nuevo usuario en la base de datos.
- **POST /users/login**: Inicia sesión de usuario y obtiene un token de autenticación.

## Uso

Puedes probar los endpoints utilizando cualquier cliente HTTP (por ejemplo, Postman).
