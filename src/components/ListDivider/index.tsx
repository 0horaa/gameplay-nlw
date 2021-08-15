import React from "react";
import {View} from "react-native";

import {styles} from "./styles";

type Props = {
    isCentered?:boolean; //tipo pra dizer se o Divider vai ficar centralizado
}

export function ListDivider({isCentered} : Props){
    return(
        <View style={[
            styles.container, 
            isCentered === true ? {marginVertical:12} : {marginTop:2, marginBottom:31}
        ]}></View>
    );
}