export function updateProduct(product1, product2) {
  Object.keys(product1).forEach((key) => {
    if (product1[key]) {
      product2[key] = product1[key];
    }
  });
  return product2;
}
