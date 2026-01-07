import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import productsRoute from "./routes/products.js";
import cartsRoute from "./routes/carts.js";
import cookieParser from "cookie-parser";

const app = express();



app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use("/auth", authRouter);
app.use("/users", usersRoute);
app.use("/products", productsRoute);
app.use("/carts", cartsRoute);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
