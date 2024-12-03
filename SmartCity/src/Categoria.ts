import {Produto} from "./Produto";

export class Categoria {
    private nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
    setNome(nome: string): void {
      this.nome = nome;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    listarProdutosPorCategoria(produtos: Produto[]): Produto[] {
        return produtos.filter((produto) => produto.getCategoria() === this);
    }
  }
  