import { v4 as uuidv4 } from "uuid";
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51OXILySJDNnBRc8Tik6N5UsZhpJZPcjX7T6GbLtCS2BGMfcxdcpeXme8U0U4qMSkCQwtl288xqMqWx2sraELyYOe00e7r7IKn4"
);

export const createPayment = (req, res) => {
//   try {
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
  } 
//   catch (error) {
//     console.log(error.message);
//   }
// };


export const createPayments = async (req, res) => {
      try {
        const { product, token } = req.body;
        const transactionKey = uuidv4();
        const pay = stripe.customers.create({
            email: token.email,
            source: token.id
        })
        
        const paymentData = stripe.charges.create({
                amount: product.price,
                currency: "INR",
                customer: pay.then((customer) => customer.id),
                receipt_email: token.email,
                description: product.name
            })
      } catch (error) {
        console.log(error.message);
      }
    };
