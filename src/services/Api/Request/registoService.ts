import { AxiosResponse } from "axios";
import { Api } from "../api";

export interface RegistroUser {
    id?: number;
    nome: string;
    email: string;
    setor: string;
    password: string;
}

export function postUser(
    user: RegistroUser
): Promise<AxiosResponse<RegistroUser, any>> {
    let url = `/api/auth/registro`;

    return Api.post(url, user);
}
