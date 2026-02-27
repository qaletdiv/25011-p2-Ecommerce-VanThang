import express from "express"
import { cartsData } from "../data/carts.js"

const router = express.Router()

let ordersData = {}

router.get("/:userId", (req,res) => {
  const {userId} = req.params
  res.json(ordersData[userId] || [] )
} )

router.post("/:userId", (req, res) => {
  const { userId } = req.params
  const { address,phone } = req.body

  const cart = cartsData[userId]

  if (!cart || cart.length === 0) {
    return res.status(400).json({ message: "Cart is empty" })
  }

  if (!address) {
    return res.status(400).json({ message: "Address required" })
  }
  if(!phone){
    return res.status(400).json({message: "Phone required"})
  }

  const total = cart.reduce((sum, item) => {
    return sum + item.product.price * item.quantity
  }, 0)

  const newOrder = {
    id: Date.now(),
    userId,
    items: cart,
    total,
    phone,
    address,
    status: "pending",
    createdAt: new Date()
  }

  if (!ordersData[userId]) ordersData[userId] = []
  ordersData[userId].push(newOrder)

  cartsData[userId] = []

  res.json(newOrder)
})

export default router