class ProductNotFoundException extends Error {
  constructor() {
    super("Producto no encontrado");
  }
}

module.exports = {
  ProductNotFoundException,
};
