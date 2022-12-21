import express from "express";
import morgan from "morgan";

//routes
import employeesRoutes from "./routes/employees.routes";

const cors = require("cors");

const app = express();

//Configuraciones
app.set("port", 4000);
app.use(
  cors({
    origin: "*",
  })
);

//Middleware
app.use(morgan("dev"));
app.use(express.json());
//Routes
app.use("/api/employees", employeesRoutes);

export default app;
