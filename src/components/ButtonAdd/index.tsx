import React from "react";
import {RectButton, RectButtonProps} from "react-native-gesture-handler"
import {MaterialCommunityIcons} from "@expo/vector-icons"; //importa a biblioteca de ícones padrão do expo para usar ícones

import {styles} from "./styles";
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps;

//passa abaixo todas as propriedades do RectButton pra poderem ser definidas no componente ButtonAdd
//no componente MaterialCommunityIcons, define as seguintes propriedades
    //name = nome do ícone a ser usado, ali foi o plus por ser um ícone de +
    //color = cor do ícone
    //size = tamanho do ícone
export function ButtonAdd({...rest} : Props){
    return(
        <RectButton style={styles.container} {...rest}>
            <MaterialCommunityIcons name="plus" color={theme.colors.reading} size={24}>

            </MaterialCommunityIcons>
        </RectButton>
    );
}