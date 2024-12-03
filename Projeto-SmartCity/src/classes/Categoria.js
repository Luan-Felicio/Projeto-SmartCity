"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categoria = void 0;
class Categoria {
    constructor(nome) {
        this.nome = nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    listarProdutosPorCategoria(produtos) {
        return produtos.filter((produto) => produto.getCategoria() === this);
    }
}
exports.Categoria = Categoria;
