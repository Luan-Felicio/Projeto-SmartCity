import { Produto } from "./Produto";

export class Empresa {
  private nome: string;
  private endereco: string;
  private contato: string;
  private produtos: Produto[] = [];

  constructor(nome: string, endereco: string, contato: string) {
    this.nome = nome;
    this.endereco = endereco;
    this.contato = contato;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  getNome(): string {
    return this.nome;
  }

  setEndereco(endereco: string): void {
    this.endereco = endereco;
  }

  getEndereco(): string {
    return this.endereco;
  }

  setContato(contato: string): void {
    this.contato = contato;
  }

  getContato(): string {
    return this.contato;
  }

  setProdutos(produto: Produto): void {
    this.produtos.push(produto);
  }

  getProdutos(): Produto[] {
    return this.produtos;
  }
}
