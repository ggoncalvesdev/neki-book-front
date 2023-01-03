import { AxiosResponse } from "axios";
import { Api } from "../api";

export interface permissaoADM {
    id: number;
    nome: string;
    descricao: string;
}

const getAll = (): Promise<AxiosResponse<permissaoADM[], any>> => {
    return Api.get(`/api/permissoes`);
};

/* const get = (idPermissao: number) => {
    return Api.get(`api/permissoes${idPermissao}`);
};
 */
/* const create = (data): Promise<AxiosResponse<permissaoADM[], any>> => {
    return Api.post(`api/grupos`, data);
};

const update = (idGrupo: number, data) => {
    return Api.put(`api/grupos/${idGrupo}`, data);
};

const remove = (idGrupo: number) => {
    return Api.delete(`api/grupos/${idGrupo}`);
}; */
const permissaoService = {
    getAll,
    /*  get, */
    /*  create,
    update,
    remove, */
};
export default permissaoService;
