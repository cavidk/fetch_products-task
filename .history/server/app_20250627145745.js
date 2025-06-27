import express from "express";
import productsRouter from "./routes/products.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productsRouter);

export default app; 