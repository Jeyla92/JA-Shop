import express from "express";
import Database from "better-sqlite3";
import cors from "cors";

const port = 8080;
const app = express();

const db = new Database("db/database.db", { verbose: console.log });

app.use(cors());

app.get("/api/products", (req, res) => {
  const searchQuery = req.query.search
    ? req.query.search.toString().toLowerCase()
    : "";

  const stmt = db.prepare("SELECT * FROM products");
  const allProducts = stmt.all();

  if (searchQuery) {
    const filteredProducts = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery)
    );
    res.json(filteredProducts);
  } else {
    res.json(allProducts);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
