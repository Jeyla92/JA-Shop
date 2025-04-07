import express from "express";
import Database from "better-sqlite3";
import cors from "cors";

const port = 8080;
const app = express();

const db = new Database("db/database.db", { verbose: console.log });

app.use(cors());

app.get("/api/products", (req, res) => {
  try {
    const stmt = db.prepare("SELECT * FROM products");
    const products = stmt.all();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
