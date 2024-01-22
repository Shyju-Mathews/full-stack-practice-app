import db from "../database/db.js"
// import service from "../services/employee_service.js"

// export const getAllEmployees = async (req, res) => {
//     try {
//         const emp = await db.query("SELECT * FROM employees")
//         if (!emp) {
//             return res.status(404).json({ msg: "No employee records here" });
//         }
//         return res.status(200).json(emp[0]);
//     } catch (error) {
//         return res.status(500).json({error: error.message})
//     }
// }

export const getAllEmployees = async (req, res) => {
    try {
        const emp = await db.query("SELECT * FROM employees")
        if (!emp) {
            return res.status(404).json({ msg: "No employee records here" });
        }
        return res.status(200).json(emp[0]);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const getEmployeeById = async (req, res) => {
    try {
        const id = req.params.id;
        const [[emp]] = await db.query("SELECT * FROM employees WHERE id = ?", [id])
        if (emp == undefined) {
            return res.status(404).json({ msg: "Invalid employee record" });
        }
        return res.status(200).json(emp);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

export const createEmployee = async (req, res) => {
    try {
        const { name, employee_code, salary } = req.body;
        const newEmp = await db.query(`INSERT INTO employees(name, employee_code, salary) VALUES(?, ?, ?)`,[name, employee_code, salary])
        if (!newEmp) {
            return res.status(404).json({ msg: "No employee created here" });
        }
        // let newEmp = await db.query("SELECT * FROM employees WHERE id = ?", [emp[0].insertId])
       const empData = {id:  emp[0].insertId, name, employee_code, salary}
        return res.status(201).json({data: empData, msg: "successfully created"})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
} 

export const updateEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, employee_code, salary } = req.body;
        // const [[emp]] = await db.query("SELECT * FROM employees WHERE id = ?", [id])
        // if (emp == undefined) {
        //     return res.status(404).json({ msg: "Invalid employee record" });
        // }
        const update = await db.query(`UPDATE employees SET name = ?, employee_code = ?, salary = ? WHERE id = ?`,[name, employee_code, salary, id])
        if (update[0].affectedRows === 0) {
            return res.status(404).json({ msg: "record not found" });
        }
       const updatedEmpData = {id: id, name, employee_code, salary}
        return res.status(201).json({data: updatedEmpData, msg: "successfully updated"})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}


export const deleteEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const emp = await db.query("DELETE  FROM employees WHERE id = ?", [id])
        if (emp[0].affectedRows === 0) {
            return res.status(404).json({ msg: "Invalid employee record" });
        }
        return res.status(200).json({msg: "record successfully deleted"});
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
