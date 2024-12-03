import { Produto } from "./classes/Produto";
import { Categoria } from "./classes/Categoria";
import { Empresa } from "./classes/Empresa";

// Criando categorias
const categoriaEletronicos = new Categoria("Eletrônicos");
const categoriaRoupas = new Categoria("Roupas");

// Criando produtos
const empresaExemplo = new Empresa("TechCorp", "Rua A", "12345-678");
const produto1 = new Produto("1", "Celular", 1000.0, "Smartphone", categoriaEletronicos, 50, empresaExemplo);
const produto2 = new Produto("2", "Camiseta", 50.0, "Camiseta de algodão", categoriaRoupas, 200, empresaExemplo);
const produto3 = new Produto("3", "Notebook", 5000.0, "Notebook Gamer", categoriaEletronicos, 20, empresaExemplo);

// Lista de produtos
const todosOsProdutos = [produto1, produto2, produto3];

// Filtrando produtos
const produtosEletronicos = categoriaEletronicos.listarProdutosPorCategoria(todosOsProdutos);

console.log("Produtos da categoria Eletrônicos:");
produtosEletronicos.forEach((produto) => {
  console.log(`- ${produto.getNome()} (${produto.getDescricao()})`);
});

//Filtrando produtos Roupas
const roupas = [produto2];
const produtosRoupas = categoriaRoupas.listarProdutosPorCategoria(roupas)

console.log("Produtos da categoria Roupas");
roupas.forEach((produto) => {
  console.log(`- ${produto.getNome()} (${produto.getDescricao()})`);
})
