import express from "express";
import Database from "better-sqlite3";
import cors from "cors";

const port = 8080;
const app = express();

const db = new Database("db/database.db", { verbose: console.log });

// Middleware
app.use(cors());
app.use(express.json());

// POST endpoint to add a new product
app.post("/api/products", (req, res) => {
  const { name, description, image, brand, SKU, price } = req.body;

  if (!name || !description || !image || !brand || !SKU || !price) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const stmt = db.prepare(
    "INSERT INTO products (name, description, image, brand, SKU, price) VALUES (?, ?, ?, ?, ?, ?)"
  );

  try {
    const result = stmt.run(name, description, image, brand, SKU, price);
    res.status(201).json({
      id: result.lastInsertRowid,
      message: "Product added successfully",
    });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Failed to add product" });
  }
});

// GET endpoint to fetch all products
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

// GET endpoint to fetch a specific product by ID
app.get("/api/products/:slug", (req, res) => {
  const { slug } = req.params;

  const stmt = db.prepare("SELECT * FROM products WHERE url_slug = ?");
  const product = stmt.get(slug);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
