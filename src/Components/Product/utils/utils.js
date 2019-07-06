export const getProducts = (products, id) =>
  products.filter(product => product.productGroup === id);
