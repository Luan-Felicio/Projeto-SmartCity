"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(id, nome, preco, descricao, categoria, estoque, empresa) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.categoria = categoria;
        this.estoque = estoque;
        this.empresa = empresa;
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setPreco(preco) {
        this.preco = preco;
    }
    getPreco() {
        return this.preco;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    getDescricao() {
        return this.descricao;
    }
    setCategoria(categoria) {
        this.categoria = categoria;
    }
    getCategoria() {
        return this.categoria;
    }
    setEstoque(estoque) {
        this.estoque = estoque;
    }
    getEstoque() {
        return this.estoque;
    }
    setEmpresa(empresa) {
        this.empresa = empresa;
    }
    getEmpresa() {
        return this.empresa;
    }
    listarProdutos() {
        return [this];
    }
}
exports.Produto = Produto;
