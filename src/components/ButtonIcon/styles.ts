import {StyleSheet} from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:56,
        backgroundColor:theme.colors.primary,
        borderRadius:8,
        flexDirection:"row",
        alignItems:"center"
    },
    title:{
        flex:1, //ocupa todo o seu escopo na tela
        color:theme.colors.reading,
        fontFamily:theme.fonts.text500,
        fontSize:15,
        textAlign:"center"
    },
    iconWrapper:{
        width:56,
        height:56,
        justifyContent:"center",
        alignItems:"center",
        borderRightWidth:1,
        borderColor:theme.colors.line
    },
    icon:{ //só pra garantir, define as dimensões originais da imagem na estilização
        width:24,
        height:18
    }
});