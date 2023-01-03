import { AxiosResponse } from "axios";
import { Api } from "../api";

export interface listaPermissoes {
    id: number;
    nome: string;
    descricao: string;
}

export interface listaGrupos {
    id: number;
    nome: string;
    listaPermissoes: [];
}

export interface listaClientes {
    id: number;
    nome: string;
    email: string;
    setor: string;
    listaGrupos: [];
}

const getAll = (): Promise<AxiosResponse<listaClientes[], any>> => {
    return Api.get(`/api/user`);
};

const get = (idCliente: number) => {
    return Api.get(`/api/user/${idCliente}`);
};

const create = (data): Promise<AxiosResponse<listaClientes[], any>> => {
    return Api.post(`/api/user`, data);
};

const update = (idCliente: number, data) => {
    return Api.put(`/api/user/${idCliente}`, data);
};

const remove = (idCliente: number) => {
    return Api.delete(`/api/user/${idCliente}`);
};
const clienteService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default clienteService;
