import React from "react";
import {View, Text} from "react-native";
import {SvgProps} from "react-native-svg";
import {RectButton, RectButtonProps} from "react-native-gesture-handler";
import {LinearGradient} from "expo-linear-gradient";

import {styles} from "./styles";
import {theme} from "../../global/styles/theme";

type Props = RectButtonProps & {
    title:string; //define um titulo que será usado no componente Category
    icon: React.FC<SvgProps>;
    checked?:boolean;
    hasCheckBox?:boolean;
}

//a propriedade icon é convertida pra Icon em maiúsculo pra poder ser usado como Component
export function Category({title, icon:Icon, checked = false, hasCheckBox = false, ...rest} : Props){
    return(
        <RectButton {...rest}>
            <LinearGradient style={styles.container} colors={[theme.colors.secondary50, theme.colors.secondary70]}>
                <LinearGradient style={[styles.content, {opacity: checked === true ? 1 : 0.5}]}
                    colors={[checked === true ? theme.colors.secondary75 : theme.colors.secondary50, theme.colors.secondary40]}
                >

                    {
                        hasCheckBox === true && <View style={checked === true ? styles.checked : styles.check}></View>
                        //só mostra a caixinha caso a propriedade hasCheckBox seja igual a true 
                    }

                    <Icon width={48} height={48}/>

                    <Text style={styles.title}>{title}</Text>

                </LinearGradient>
            </LinearGradient>
        </RectButton>
    )
    //no vetor da view .content há 2 propriedades, a opacity serve pra definir a opacidade 1 pra caso checked retorne true e 0 pra caso ele retorne falso
}