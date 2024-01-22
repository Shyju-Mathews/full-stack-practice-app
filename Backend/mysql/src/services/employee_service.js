import db from "../database/db.js"

export const getAllEmployeeService = async () => {
        const recors = await db.query("SELECT * FROM employees")
        return recors[0]
}
