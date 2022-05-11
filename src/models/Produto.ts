import Categoria from "./Categoria"

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
}

export default Produto