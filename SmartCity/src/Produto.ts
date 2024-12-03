import {Categoria} from "./Categoria";
import {Empresa} from "./Empresa";

export class Produto {
  private id: string;
  private nome: string;
  private preco: number;
  private descricao: string;
  private categoria: Categoria;
  private estoque: number;
  private empresa: Empresa;

  constructor(
    id: string,
    nome: string,
    preco: number,
    descricao: string,
    categoria: Categoria,
    estoque: number,
    empresa: Empresa
  ) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.categoria = categoria;
    this.estoque = estoque;
    this.empresa = empresa;
  }

  setId(id: string): void {
    this.id = id;
  }

  getId(): string {
    return this.id;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  getNome(): string {
    return this.nome;
  }

  setPreco(preco: number): void {
    this.preco = preco;
  }

  getPreco(): number {
    return this.preco;
  }

  setDescricao(descricao: string): void {
    this.descricao = descricao;
  }

  getDescricao(): string {
    return this.descricao;
  }

  setCategoria(categoria: Categoria): void {
    this.categoria = categoria;
  }

  getCategoria(): Categoria {
    return this.categoria;
  }

  setEstoque(estoque: number): void {
    this.estoque = estoque;
  }

  getEstoque(): number {
    return this.estoque;
  }

  setEmpresa(empresa: Empresa): void {
    this.empresa = empresa;
  }

  getEmpresa(): Empresa {
    return this.empresa;
  }

  listarProdutos(): Produto[] {
    return [this];
  }
}
