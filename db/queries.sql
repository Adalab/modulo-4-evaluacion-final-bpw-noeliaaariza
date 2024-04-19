CREATE DATABASE snakeDB;
USE snakeDB;

CREATE TABLE snakes (
  snake_id INT NOT NULL AUTO_INCREMENT,
  common_name TINYTEXT,
  scientific_name TINYTEXT NOT NULL,
  habitat TINYTEXT,
  continent VARCHAR(50) NOT NULL,
  expentance INT,
  size VARCHAR(45) NOT NULL,
  PRIMARY KEY (snake_id)
);

-- CREATE
INSERT INTO snakes (common_name, scientific_name, habitat, continent, expentance, size)

VALUES
('Anaconda Verde', 'Eunectes murinus', 'Agua dulce, pantanos', 'América del Sur', 10, '5-6 metros'),
('Cobra Real', 'Ophiophagus hannah', 'Terrestre, selvas', 'Asia, África', 20, '3-4 metros'),
('Boa Constrictor', 'Boa constrictor', 'Terrestre, bosques', 'América', 25, '3-4 metros'),
('Víbora de Cascabel', 'Crotalus spp.', 'Terrestre, semidesiertos', 'América', 15, 'Hasta 2 metros'),
('Serpiente de Coral', 'Micrurus spp.', 'Terrestre, selvas', 'América', 6, '1 metro'),
('Serpiente Rey de California', 'Lampropeltis californiae', 'Terrestre, semidesiertos', 'América', 15, '1-2 metros'),
('Mamba Negra', 'Dendroaspis polylepis', 'Terrestre, bosques', 'África', 11, '2-4 metros'),
('Serpiente de Maíz', 'Pantherophis guttatus', 'Terrestre, campos', 'América', 17, '1-1.5 metros'),
('Serpiente de Rata', 'Elaphe obsoleta', 'Terrestre, bosques', 'América', 16, '1.2-1.8 metros'),
('Serpiente de Alambre', 'Rhinophis philippinus', 'Terrestre, bosques', 'Asia', 10, '15-25 cm');

-- query para el endpont "/snakes"
SELECT * from snakes;

-- query para el endpont "/newsnake"
INSERT INTO snakes (common_name, scientific_name, habitat, continent, expentance, size)
VALUES 
('Cobra Escupidora', 'Naja ashei', 'Terrestre, bosques y zonas rocosas', 'África', 15, 'Hasta 2 metros');

-- query para el endpoint /snake/:id (actualizar datos de serpiente existente)
UPDATE snakes SET 
common_name = 'Serpiente de Maíz prueba', 
scientific_name = 'Pantherophis guttatus', 
habitat = 'Terrestre, campos', 
continent = 'América del Sur', 
expentance = 20, 
size = '30 metros' 
WHERE snake_id = 12;

-- query que he hecho para arreglar un error tipográfico y modificar el nombre de la columna correctamente
ALTER TABLE snakes
CHANGE COLUMN expentace expentance INT;

-- query para eliminar item
DELETE FROM snakes WHERE snake_id = 13