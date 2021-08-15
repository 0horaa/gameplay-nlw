import React from "react";
import {View, ActivityIndicator} from "react-native";

import {styles} from "./styles";
import {theme} from "../../global/styles/theme";

export function Loading(){
    //ActivityIndicator é um círculo de loading
        //size é o seu tamanho - large é um tamanho grande
        //color é a sua cor
    return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color={theme.colors.primary}/>
        </View>
    );
}