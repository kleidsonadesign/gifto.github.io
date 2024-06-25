// utils.js
function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function searchProductByName(products, searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  return products.filter(product => product.name.toLowerCase().includes(searchTerm));
}

export { formatPrice, searchProductByName };
