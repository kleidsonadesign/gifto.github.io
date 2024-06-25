
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

// js/app.js

// Array que simula os produtos disponíveis na loja
const produtosDisponiveis = [
    { id: 1, nome: 'Produto A', preco: 100.00 },
    { id: 2, nome: 'Produto B', preco: 50.00 },
    { id: 3, nome: 'Produto C', preco: 200.00 },
    { id: 4, nome: 'Produto D', preco: 150.00 }
];

// Variável para armazenar os itens no carrinho
let carrinho = [];

// Função para renderizar os produtos disponíveis na loja
function renderizarProdutos() {
    const containerProdutos = document.getElementById('produtos-disponiveis');
    containerProdutos.innerHTML = '';

    produtosDisponiveis.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.innerHTML = `
            <p>${produto.nome} - R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;
        containerProdutos.appendChild(divProduto);
    });
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(idProduto) {
    const produtoSelecionado = produtosDisponiveis.find(produto => produto.id === idProduto);

    if (produtoSelecionado) {
        const itemExistente = carrinho.find(item => item.produto.id === idProduto);
        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            carrinho.push({ produto: produtoSelecionado, quantidade: 1 });
        }
    }

    renderizarCarrinho();
}

// Função para remover um produto do carrinho
function removerDoCarrinho(idProduto) {
    carrinho = carrinho.filter(item => item.produto.id !== idProduto);
    renderizarCarrinho();
}

// Função para atualizar a visualização do carrinho
function renderizarCarrinho() {
    const tabelaCarrinho = document.getElementById('cart-body');
    tabelaCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach(item => {
        const linhaProduto = document.createElement('tr');
        linhaProduto.innerHTML = `
            <td>${item.produto.nome}</td>
            <td>R$ ${item.produto.preco.toFixed(2)}</td>
            <td>${item.quantidade}</td>
            <td>R$ ${(item.produto.preco * item.quantidade).toFixed(2)}</td>
            <td>
                <button onclick="removerDoCarrinho(${item.produto.id})">Remover</button>
            </td>
        `;
        tabelaCarrinho.appendChild(linhaProduto);
        total += item.produto.preco * item.quantidade;
    });

    const totalElement = document.getElementById('cart-total');
    totalElement.textContent = total.toFixed(2);
}

// Inicializa a renderização dos produtos na página
renderizarProdutos();

  
  });
});


