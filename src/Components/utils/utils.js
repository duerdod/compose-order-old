export function getProductsByGroupId(products, id) {
  return products.filter(product => product.productGroup === id);
}

export function calcOrderValue(products) {
  const total = products.reduce(
    (total, product) => total + product.price * product.qty,
    0
  );
  return total;
}

export function getOrderProducts(products) {
  const orderProducts = products
    .filter(product => product.qty > 0)
    .map(p => {
      return {
        id: p.id,
        name: p.name,
        qty: p.qty
      };
    });
  return orderProducts;
}
