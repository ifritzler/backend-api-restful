const express = require("express");
const router = express.Router();

// Simula una base de datos en memoria
const initialState = {
  products: [],
  rowCount: 0,
};

router.get("/", (req, res) => {
  res.status(200).json({ message: "products router" });
});

module.exports = router;
