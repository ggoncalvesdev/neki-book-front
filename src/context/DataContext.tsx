import jwt_decode from 'jwt-decode';
import React, { createContext, useState } from 'react';

import { DadosUsuarioLoginType } from '../models/DadosUsuarioLoginType';

//criando contexto
export const DataContext = createContext({});

//criando provider
export const DataProvider = ({children}) => {
  const [dadosUsuarioLogin, setDadosUsuarioLogin] = useState<DadosUsuarioLoginType>();

  const armazenaDadosUsuarioLogin = (jwt: any) => {
    var tokenDecodificado: any = jwt_decode(jwt);

    //armazenando apenas a chave usuário do json decodificado
    var usuario = tokenDecodificado.usuario;

    //está transferindo a string json contida dentro da variável usuario num objeto
    usuario = JSON.parse(usuario);

    setDadosUsuarioLogin({
      id: usuario?.id,
      nome: usuario?.nome,
      email: usuario?.email,
      setor: usuario?.setor,
      imagemUrl: usuario?.imagemUrl,
      token: jwt,
    });
    // console.log("DADOS DO USUARIO: " + JSON.stringify(usuario));
    
  };

  return (
    <DataContext.Provider value={{dadosUsuarioLogin, armazenaDadosUsuarioLogin}}>
      {children}
    </DataContext.Provider>
  );
};