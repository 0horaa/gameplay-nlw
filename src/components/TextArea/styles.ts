import {StyleSheet} from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:95,
        backgroundColor:theme.colors.secondary40,
        borderWidth:1,
        borderColor:theme.colors.secondary50,
        borderRadius:8,
        color:theme.colors.reading,
        fontFamily:theme.fonts.text400,
        fontSize:13,
        textAlignVertical:"top", //faz com que o texto dentro do input comece no topo
        paddingHorizontal:16, //esses paddings impedem que o texto cole nas laterais e no topo
        paddingTop:16
    }
});