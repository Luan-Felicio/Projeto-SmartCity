"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    constructor(nome, endereco, contato) {
        this.produtos = [];
        this.nome = nome;
        this.endereco = endereco;
        this.contato = contato;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setEndereco(endereco) {
        this.endereco = endereco;
    }
    getEndereco() {
        return this.endereco;
    }
    setContato(contato) {
        this.contato = contato;
    }
    getContato() {
        return this.contato;
    }
    setProdutos(produto) {
        this.produtos.push(produto);
    }
    getProdutos() {
        return this.produtos;
    }
}
exports.Empresa = Empresa;
