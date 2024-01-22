import express  from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()
import bodyParser from "body-parser";
import db from "./src/database/db.js"
import employeeRoutes from "./src/routes/employee.js"
// import paymentRoutes from "./src/routes/payment.js"

import { v4 as uuidv4 } from "uuid";
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51OXILySJDNnBRc8Tj2I0SIUD94plgDF8cM3QgvYAiGElsTd2QFnWIB6tsSqDRBUZalNRm93t1U7essyAsL7gtGMK00VaAZZ0BI"
);


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({extended: true, limit: "30mb"}))

app.get("/", (req, res) => {
    res.send("Welcome to the world")
})

app.post("/payment", (req, res)   => {
    const { product, token } = req.body;
    const transactionKey = uuidv4();
    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then((customer) => {
        stripe.charges.create({
            amount: product.price,
            currency: "INR",
            customer: customer.id,
            receipt_email: token.email,
            description: product.name
        }).then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
        })
    })
})

// app.post("/payment",(req, res) => {
//     console.log(req.body)
//     res.send("payment successfully completed")
// })

app.use("/employees", employeeRoutes)
// app.use("/payment", paymentRoutes)

db.query("SELECT 1").then(() => {
    console.log("Db connected successfully")
    app.listen(PORT, () => {
        console.log(`Server running at port : ${PORT}`)
    })
}).catch((err) => console.log(`Db connection failed \n` + err))



