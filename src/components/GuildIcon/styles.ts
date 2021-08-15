import {StyleSheet} from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width:62,
        height:66,
        borderRadius:8,
        backgroundColor:theme.colors.discord,
        alignItems:"center",
        justifyContent:"center",
        overflow:"hidden" //impede que as coisas dentro dele ultrapassem a sua borda
    },
    image:{
        width:62,
        height:66,
    }
});