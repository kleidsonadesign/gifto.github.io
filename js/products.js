
// products.js
const products = [];

function filterProductsByCategory(array, categoria) {
  return array.filter(product => product.category === categoria);
}

function sortProductsByPrice(array, order) {
  if (order === 'asc') {
    return array.slice().sort((a, b) => a.price - b.price);
  } else if (order === 'desc') {
    return array.slice().sort((a, b) => b.price - a.price);
  } else {
    return array; // Ordenação padrão, sem alteração
  }
}

async function fetchProductsFromServer(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erro ao obter produtos do servidor');
    }
    let data = await response.json();
    products.push(...data); // Adiciona produtos obtidos ao array de produtos
    return products;
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

export { products, filterProductsByCategory, sortProductsByPrice, fetchProductsFromServer };
