export const getProducts = (products, id) =>
  products.filter(product => product.productGroup === id);

export function calcOrderValue(products) {
  const total = products.reduce(
    (total, product) => total + product.price * product.qty,
    0
  );
  return total;
}
