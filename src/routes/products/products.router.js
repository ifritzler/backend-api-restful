const express = require("express");
const { ProductNotFoundException } = require("../../exceptions");
const router = express.Router();

// Simula una base de datos en memoria
const state = {
  products: [],
  rowCount: 0,
};

router.get("/", (_req, res) => {
  res.status(200).json({ data: state.products });
});

router.get("/:id", (req, res) => {
  const { id } = req.params.id;
  const product = state.products.find((item) => item.id === id);

  if (!product) throw new ProductNotFoundException();

  res.status(200).json({ data: product });
});

module.exports = router;
