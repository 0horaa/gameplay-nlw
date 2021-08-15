import React from "react";
import {createStackNavigator} from "@react-navigation/stack"; //importa as funções de navegação da biblioteca React Navigation

import {theme} from "../global/styles/theme";

import {Home} from "../screens/home/index";
import {AppointmentDetails} from "../screens/appointmentDetails/index";
import {AppointmentCreate} from "../screens/appointmentCreate/index";

const {Navigator, Screen} = createStackNavigator(); //pega as funções Navigator e Screen que são nativas do createStackNavigator

//headerMode remove o cabeçalho gerado pelo stack navigation
export function AppRoutes(){ //Navigator é a estrutura, Screen são as telas que levam dois argumentos: um nome e a tela que ela vai mostrar
    return(
        <Navigator 
            headerMode="none"
            screenOptions={{
                cardStyle:{
                    backgroundColor:theme.colors.secondary100
                }
            }}
        >
            <Screen name="Home" component={Home}></Screen>
            <Screen name="AppointmentDetails" component={AppointmentDetails}></Screen>
            <Screen name="AppointmentCreate" component={AppointmentCreate}></Screen>
        </Navigator>
    );
}