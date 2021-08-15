import React from "react";
import {Image} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

import {styles} from "./styles";
import {theme} from "../../global/styles/theme";

type Props = { //cria um tipo string que será usado pra definir a url da imagem
    urlImage:string;
}

export function Avatar({urlImage} : Props){ //o source da imagem pode ser definido dinamicamente como parâmetro, assim dando mais liberdade para o uso desse componente com outras imagens
    return(
        <LinearGradient style={styles.container} colors={[theme.colors.secondary50, theme.colors.secondary70]}>
            <Image source={{uri:urlImage}} style={styles.avatar}></Image>
        </LinearGradient>
    );
}