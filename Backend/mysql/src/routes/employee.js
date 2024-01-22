import express from "express"
import {createEmployee, deleteEmployee, getAllEmployees, getEmployeeById, updateEmployee} from "../controllers/employee_controller.js"

const router = express.Router();

router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);

router.post("/", createEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export default router