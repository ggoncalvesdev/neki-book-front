export type DadosLeituraType =
    {
        idLeitura: number;
        livros: {
            idLivro: number;
            nomeLivro: string;
            imagem: string;
        }
    }