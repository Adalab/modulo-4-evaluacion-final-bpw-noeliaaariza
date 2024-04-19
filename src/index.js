const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

require("dotenv").config();

const server = express();

server.use(cors());
server.use(express.json({ limit: "25mb" }));

async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "snakeDB",
  });
  connection.connect();
  return connection;
}

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is listening in http://localhost:${port}/`);
});

// endpoint para listar todos los elementos

server.get("/snakes", async (req, res) => {
  try {
    const connection = await getDBConnection();
    const querySQL = "SELECT * from snakes";
    const [result] = await connection.query(querySQL);

    connection.end();

    if (result.length === 0) {
      res.status(404).json({
        success: false,
        error: "No hay ningún elemento",
      });
    } else {
      res.json({
        info: { count: result.length },
        result: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ha habido un error interno. Contacte soporte",
    });
  }
});

// endpoint para añadir nuevo elemento

server.post("/newsnake", async (req, res) => {
  try {
    const data = req.body;
    const {
      common_name,
      scientific_name,
      habitat,
      continent,
      expentance,
      size,
    } = data;

    const connection = await getDBConnection();
    const querySQL =
      "INSERT INTO snakes (common_name, scientific_name, habitat, continent, expentance, size) VALUES(?, ?, ?, ?, ?, ?)";
    const [resultInsert] = await connection.query(querySQL, [
      common_name,
      scientific_name,
      habitat,
      continent,
      expentance,
      size,
    ]);

    connection.end();

    res.status(201).json({
      success: true,
      id: resultInsert.insertId,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ha habido un error interno. Contacte soporte",
    });
  }
});

// endpoint para modificar elemento existente

server.put("/snake/:id", async (req, res) => {
  try {
    const snakeID = req.params.id;
    const newData = req.body;

    const {
      common_name,
      scientific_name,
      habitat,
      continent,
      expentance,
      size,
    } = newData;

    const connection = await getDBConnection();
    const querySQL =
      "UPDATE snakes SET common_name = ?, scientific_name = ?, habitat = ?, continent = ?, expentance = ?, size = ? WHERE snake_id = ?";
    const [result] = await connection.query(querySQL, [
      common_name,
      scientific_name,
      habitat,
      continent,
      expentance,
      size,
      snakeID,
    ]);

    connection.end();

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ha habido un error interno. Contacte soporte",
    });
  }
});

// endpoint para eliminar elemento existente
server.delete("/snake/:id", async (req, res) => {
  try {
    const snakeID = req.params.id;
    const connection = await getDBConnection();
    const sqlQuery = "DELETE FROM snakes WHERE snake_id = ?";
    const [result] = await connection.query(sqlQuery, [snakeID]);

    connection.end();

    if (result.affectedRows > 0) {
      res.status(200).json({
        success: true,
        message: "Elemento eliminado",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "No se ha eliminado el elemento",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ha habido un error interno. Contacte soporte",
    });
  }
});
