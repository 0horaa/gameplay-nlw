import React, {ReactNode} from "react";
import {LinearGradient} from "expo-linear-gradient";
import {BorderlessButton} from "react-native-gesture-handler"; //é um botão indicado para ter apenas ícones
import {Feather} from "@expo/vector-icons"; //importa uma biblioteca de ícones do Expo (ícone de voltar)
import {useNavigation} from "@react-navigation/native";

import {View, Text} from "react-native";

import {styles} from "./styles";
import {theme} from "../../global/styles/theme";

type Props = {
    title:string;
    action?:ReactNode; //um elemento ReactNode pode ser várias coisas, incluindo uma instância de algum componente React
}

export function Header({title, action} : Props){

    const navigation = useNavigation();
    function handleGoBack(){
        navigation.goBack(); //função que volta pra tela anterior
    }

    return(
        <LinearGradient colors={[theme.colors.secondary100, theme.colors.secondary40]} style={styles.container}>

            <BorderlessButton onPress={handleGoBack}>
                <Feather name="arrow-left" size={24} color={theme.colors.reading} style={styles.iconGoBack}/>
            </BorderlessButton>

            <Text style={styles.title}>{title}</Text>

            {
                action ? <View>{action}</View> : <View style={{width:24}}></View>
                /*se o action existir, então mostre-o, senão
                mostre uma view vazia com largura de 24, essa técnica serve pra
                compensar caso não tenha o ícone de compartilhamento, assim criando uma
                melhor centralização do texto do meio
                */
            }
        </LinearGradient>
    );
}