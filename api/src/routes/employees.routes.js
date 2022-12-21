import { Router } from "express";
import { methods as employeesController } from "../controllers/user.controller";

const router = Router();

router.get("/", employeesController.getEmployees);
router.post("/", employeesController.postEmployees);
router.put("/:id", employeesController.putEmployees);
router.delete("/:id", employeesController.deleteEmployees);

export default router;
