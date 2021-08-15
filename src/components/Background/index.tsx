import React, {ReactNode} from "react";
import {LinearGradient} from "expo-linear-gradient"

import {styles} from "./styles";
import {theme} from "../../global/styles/theme";

type Props = {
    children:ReactNode; //cria uma propriedade com o tipo ReactNode, ou seja, um elemento filho do react
}

export function Background({children} : Props){
    //const{secondary80, secondary100} = theme.colors;
    //poderia fazer da maneira acima, pra assim colocar somente o nome secondary 80 e secondary100 nos dois valores da propriedae colors

    return(//LinearGradient cria um gradiente linear, as cores são definidas pela propriedade color definindo as cores em 2 posições num array
        <LinearGradient style={styles.container} colors={[theme.colors.secondary80, theme.colors.secondary100]}>
            {children /* definindo-se um parâmetro children, esse componente ganha a capacidade de envolver outros componentes pra que assim o gradiente envolta todo o app*/}
        </LinearGradient>
    );
}