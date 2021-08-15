import {StyleSheet} from "react-native";
import {getStatusBarHeight} from "react-native-iphone-x-helper"
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:104,
        paddingTop:getStatusBarHeight(),
        paddingHorizontal:24,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        flex:1, //faz com que ocupe todo o espaço disponível, assim só ele se centraliza com o justify
        textAlign:"center",
        fontFamily:theme.fonts.title700,
        fontSize:20,
        color:theme.colors.reading
    },
    iconGoBack:{
        paddingVertical:30
    }
});