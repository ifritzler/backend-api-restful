const express = require("express");
const {
  ProductNotFoundException,
  ProductEmptyEntity,
} = require("../../exceptions");
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
  const { id } = req.params;

  const product = state.products.find((item) => item.id == id);

  if (!product) throw new ProductNotFoundException();

  res.status(200).json({ data: product });
});

router.post("/", (req, res) => {
  const product = req.body;
  // TODO: Aqui deberia haber uan validacion mas efectiva que solo verificar que no haya llegado nada
  if (Object.entries(product).length === 0) throw new ProductEmptyEntity();

  // Seteamos el nuevo id y guardamos en la base de datos
  state.rowCount += 1;
  const newProduct = { id: state.rowCount, ...product };
  state.products.push(newProduct);

  // Devolvemos la respuesta satisfactoria
  res.status(201).json(newProduct);
});

module.exports = router;
