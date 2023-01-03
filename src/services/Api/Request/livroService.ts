import { AxiosResponse } from "axios";
import { Api } from "../api";

const get = (isbnLivro: string) => {
    return Api.get(`/api/livros/consulta-livro/${isbnLivro}`);
};

const livroService = {
    get,
};
export default livroService;
