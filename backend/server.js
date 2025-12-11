import express from "express";
import cors from "cors";

import usersRoute from "./routes/users.js";
import productsRoute from "./routes/products.js";
import cartsRoute from "./routes/carts.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRoute);
app.use("/products", productsRoute);
app.use("/carts", cartsRoute);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
