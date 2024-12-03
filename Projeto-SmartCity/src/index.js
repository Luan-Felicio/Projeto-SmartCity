"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = require("./classes/Produto");
const Categoria_1 = require("./classes/Categoria");
const Empresa_1 = require("./classes/Empresa");
// Criando categorias
const categoriaEletronicos = new Categoria_1.Categoria("Eletrônicos");
const categoriaRoupas = new Categoria_1.Categoria("Roupas");
// Criando produtos
const empresaExemplo = new Empresa_1.Empresa("TechCorp", "Rua A", "12345-678");
const produto1 = new Produto_1.Produto("1", "Celular", 1000.0, "Smartphone", categoriaEletronicos, 50, empresaExemplo);
const produto2 = new Produto_1.Produto("2", "Camiseta", 50.0, "Camiseta de algodão", categoriaRoupas, 200, empresaExemplo);
const produto3 = new Produto_1.Produto("3", "Notebook", 5000.0, "Notebook Gamer", categoriaEletronicos, 20, empresaExemplo);
// Lista de produtos
const todosOsProdutos = [produto1, produto2, produto3];
// Filtrar produtos da categoria Eletrônicos
const produtosEletronicos = categoriaEletronicos.listarProdutosPorCategoria(todosOsProdutos);
console.log("Produtos da categoria Eletrônicos:");
produtosEletronicos.forEach((produto) => {
    console.log(`- ${produto.getNome()} (${produto.getDescricao()})`);
});
