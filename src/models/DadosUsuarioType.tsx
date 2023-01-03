export type DadosUsuarioType = {
    id: number;
    nome: string;
    email: string;
    setor: string;
    token: string;
    leituras:[{
      idLeitura:number;
      livros:{
        nomeLivro: string;
        imagem: string;
      }
    }]
  };