import {StyleSheet} from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width:48,
        height:48,
        backgroundColor:theme.colors.secondary40,
        borderWidth:1,
        borderColor:theme.colors.secondary50,
        borderRadius:8,
        color:theme.colors.reading,
        fontFamily:theme.fonts.text400,
        fontSize:13,
        textAlign:"center",
        marginRight:4
    }
});