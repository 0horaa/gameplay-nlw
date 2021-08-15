import React from "react";
import {NavigationContainer} from "@react-navigation/native"; //importa o container de navegação do núcleo

import {AppRoutes} from "./app.routes";

import {useAuth} from "../hooks/auth";
import {SignIn} from "../screens/signin/index";

export function Routes(){//as rotas da navegação devem estar dentro desse container
    
    const {user} = useAuth(); //pega as informações de usuário do contexto
    
    return(
        <NavigationContainer>
            {
                user.id ? //se existir usuário logado, vá para as rotas
                    <AppRoutes></AppRoutes>
                : //senão, vá pra tela de login
                    <SignIn/>
            }
        </NavigationContainer>
    );
}