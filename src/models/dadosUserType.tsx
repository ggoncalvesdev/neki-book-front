export type DadosUserType = {
    id: number;
    nome: string;
    email: string;
    setor: string;
    token: string;
    leituras: [
        {
            idLeitura: number;
            livros: {
                nomeLivro: string;
                imagem: string;
            };
        }
    ];
    /* summaries: [],
    comments: [],
    amizadeSeguidores: [],
    amizadeSeguidos: [], */
};
// Ver restante do retorno no postam
