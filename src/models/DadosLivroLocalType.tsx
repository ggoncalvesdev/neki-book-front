export type DadosLivroLocalType = {
    idLivro: number;
    nomeLivro: string;
    autor: string;
    imagem: string;
    leituras?: {
        idLeitura: number;
        status:string;
    };
} 