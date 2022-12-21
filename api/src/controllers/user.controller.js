import { getConnection } from "../database/database";

const getEmployees = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM employees");
    res.json(result);
  } catch (error) {
    res.status("500");
    res.send(error.message);
  }
};

const postEmployees = async (req, res) => {
  try {
    const connection = await getConnection();
    const { nombre, apellido, estado, fecha } = req.body;
    if (
      nombre == undefined ||
      apellido == undefined ||
      estado == undefined ||
      estado == fecha
    ) {
      res.status(400).json({ message: "Los campos no estan completos" });
    }
    const employe = { nombre, apellido, estado, fecha };
    const result = await connection.query(
      "INSERT INTO employees SET ?",
      employe
    );
    res.json(result);
  } catch (error) {
    res.status("500");
    res.send(error.message);
  }
};

const putEmployees = async (req, res) => {
  try {
    const connection = await getConnection();
    const { id } = req.params;
    const { nombre, apellido, estado, fecha } = req.body;

    const employe = { nombre, apellido, estado, fecha };
    const result = await connection.query(
      "UPDATE employees SET ? WHERE id = ?",
      [employe, id]
    );
    res.json(result);
  } catch (error) {
    res.status("500");
    res.send(error.message);
  }
};

const deleteEmployees = async (req, res) => {
  try {
    const connection = await getConnection();
    const { id } = req.params;

    const result = await connection.query(
      "UPDATE employees SET estado='Eliminado' WHERE employees.id=" + id
    );
    res.json(result);
  } catch (error) {
    res.status("500");
    res.send(error.message);
  }
};

export const methods = {
  getEmployees,
  postEmployees,
  putEmployees,
  deleteEmployees,
};
