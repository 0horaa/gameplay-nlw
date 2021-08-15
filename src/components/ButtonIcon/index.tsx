import React from "react";
import {RectButton, RectButtonProps} from "react-native-gesture-handler"; //componente de botão que reage melhor com cada s.o
import {Text, Image, View, TouchableOpacity, TouchableOpacityProps} from "react-native"; //TouchableOpacity é um elemento de clique

import DiscordImg from "../../assets/discord.png";
import {styles} from "./styles";

//na linha abaixo, o objeto recebe além do objeto que eu criei, todas as propriedades do TouchableOpacity
type Props = /*TouchableOpacityProps*/ RectButtonProps & { //cria um objeto com uma propriedade chamada title do tipo string
    title:string;
    //title?:string; - com a ?, a referência desse objeto na hora de usar o ButtonIcon no JSX não é obrigatória
}

export function ButtonIcon({title, ...rest} : Props){ //põe a propriedade title do objeto Props como parãmetro dessa função, e também põe todo o resto com o argumento ...rest
    return(
        <RectButton style={styles.container} {...rest /*passa todas as propriedades pra ele*/}>

            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}></Image>
            </View>

            <Text style={styles.title}>
                {title /*põe aqui dentro o parâmetro title definido na função*/}
            </Text>

        </RectButton>
    );
}