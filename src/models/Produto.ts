import Categoria from "./Categoria"
import User from "./User";

interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    tipo: string
    classInd: string;
    console: string;
    foto: string;
    dataProduto: string;
    categoria? : Categoria | null;
    usuario: User | null; //Adicionando o campo usuário
}

export default Produto