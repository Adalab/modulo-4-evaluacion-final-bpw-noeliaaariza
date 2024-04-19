-- queries para el BONUS 1 autentificación y login
USE snakeDB;

CREATE TABLE usuarios_db (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(100) UNIQUE,
  nombre VARCHAR(100),
  password VARCHAR(100),
  PRIMARY KEY (id)
);

-- query para modificar la tabla para que admita más carácteres (de 100 iniciales a 255)
ALTER TABLE usuarios_db
CHANGE COLUMN password password VARCHAR(255);