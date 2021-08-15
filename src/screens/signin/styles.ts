import {StyleSheet} from "react-native"; //importa o componente de estilização do react native
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({ //exporta um objeto baseado no componente do StyleSheet
    container:{
        flex:1, //diz que vai ocupar toda a tela
        justifyContent:"center",
        alignItems:"center" 
    },
    image:{
        width:"100%",
        height:360
    },
    content:{
        marginTop:-40,
        marginHorizontal:50 //aplica margin na direita e na esquerda
    },
    title:{
        color:theme.colors.reading,
        textAlign:"center",
        fontSize:40,
        fontFamily:theme.fonts.title700, //pega a fonte definida no arquivo themes.ts
        marginBottom:16,
        lineHeight:40 //altura entre as linhas
    },
    subtitle:{
        color:theme.colors.reading,
        textAlign:"center",
        fontSize:15,
        fontFamily:theme.fonts.title500,
        marginBottom:64,
        lineHeight:25
    }
});