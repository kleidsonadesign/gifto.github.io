// app.js
import { products, filterProductsByCategory, sortProductsByPrice, fetchProductsFromServer } from './products.js';
import { formatPrice, searchProductByName } from './utils.js';

document.addEventListener('DOMContentLoaded', async function() {
  // Exemplo de uso dos módulos e funções
  await fetchProductsFromServer('https://api.example.com/products');
  console.log('Produtos carregados:', products);

  let electronicsProducts = filterProductsByCategory(products, 'Electronics');
  console.log('Produtos de Eletrônicos:', electronicsProducts);

  let sortedProducts = sortProductsByPrice(products, 'asc');
  console.log('Produtos ordenados por preço crescente:', sortedProducts);

  let formattedPrice = formatPrice(29.99);
  console.log('Preço formatado:', formattedPrice);

  let searchTerm = 'phone';
  let searchResults = searchProductByName(products, searchTerm);
  console.log(`Resultados da busca por "${searchTerm}":`, searchResults);

  // Exemplo de adicionar evento (simulado) para adicionar ao carrinho
  const addToCartButton = document.getElementById('addToCartButton');
  addToCartButton.addEventListener('click', function() {
    console.log('Produto adicionado ao carrinho');
    // Implementar lógica real de adicionar ao carrinho aqui
  });
});
