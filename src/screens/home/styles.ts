import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-iphone-x-helper"; //usa uma função que pega a altura da barra de status do Iphone

export const styles = StyleSheet.create({
    header:{
        width:"100%",
        paddingHorizontal:24,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:getStatusBarHeight() + 26, //ou seja, pega o valor da altura da barra de status e soma 26, isso evita que ocorram bugs com as interfaces do Iphone
        marginBottom:42
    },
    content:{
        marginTop:7
    },
    matches:{
        marginTop:24,
        marginLeft:24
    }
});