import {Produto} from "./Produto";
import {Categoria} from "./Categoria";
import {Empresa} from "./Empresa";

//criando categorias
const cat1 = new Categoria("Eletronicos");
const cat2 = new Categoria("Livros");

//criadno empresa
const empresa1 = new Empresa("Dell", "Rua AV. Jk", "3333-9999");

//Criando produtos
const p1 = new Produto("001", "Notebook Dell g15", 5.999, "Descrição", cat1, 10, empresa1);

