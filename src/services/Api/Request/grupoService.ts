import { AxiosResponse } from "axios";
import { Api } from "../api";

export interface listaGrupos {
    nome: string;
}

const getAll = () /* : Promise<AxiosResponse<listaGrupos[], any>> */ => {
    return Api.get(`api/grupos`);
};

const get = (idGrupo: number) => {
    return Api.get(`api/grupos/${idGrupo}`);
};

const create = (data): Promise<AxiosResponse<listaGrupos[], any>> => {
    return Api.post(`api/grupos`, data);
};

const update = (idGrupo: number, data) => {
    return Api.put(`api/grupos/${idGrupo}`, data);
};

const remove = (idGrupo: number) => {
    return Api.delete(`api/grupos/${idGrupo}`);
};
const grupoService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default grupoService;
