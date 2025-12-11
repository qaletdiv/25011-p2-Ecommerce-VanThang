import express from "express";
import { cartsData } from "../data/carts.js";

const router = express.Router();

router.get("/:userId", (req, res) => {
  res.json(cartsData[req.params.userId] || []);
});
router.post("/:userId", (req, res) => {
  const { userId } = req.params;

  const newItem = {
    id: Date.now(),
    ...req.body
  };

  if (!cartsData[userId]) cartsData[userId] = [];
  cartsData[userId].push(newItem);

  res.json(newItem);
});
router.delete("/:userId/:itemId", (req, res) => {
  const { userId, itemId } = req.params;

  cartsData[userId] = cartsData[userId].filter(i => i.id != itemId);

  res.json({ message: "Deleted" });
});

export default router;
