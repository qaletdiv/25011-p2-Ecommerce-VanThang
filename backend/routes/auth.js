import express from "express";
import { usersData } from "../data/user.js";

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = usersData.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Sai email hoặc mật khẩu" });
  }

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
  });
});

export default router;
