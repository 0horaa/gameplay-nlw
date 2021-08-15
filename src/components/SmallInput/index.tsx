import React from "react";
import {TextInput, TextInputProps} from "react-native"
import {theme} from "../../global/styles/theme";

import {styles} from "./styles";

export function SmallInput({...rest} : TextInputProps){ //pega todos os atributos do TextInput
    return(
        <TextInput 
            style={styles.container} 
            keyboardType="numeric" 
            selectionColor={theme.colors.highlight} 
            {...rest}
        />
    );
}