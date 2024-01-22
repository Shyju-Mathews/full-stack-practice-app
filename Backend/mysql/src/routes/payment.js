import express from 'express'
import { createPayment } from '../controllers/payment_controller.js'

const router = express.Router()

router.post("/", createPayment)

export default router;