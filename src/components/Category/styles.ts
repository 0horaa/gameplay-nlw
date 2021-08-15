import {StyleSheet} from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width:104,
        height:120,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8,
        marginRight:7,
    },
    content:{
        width:100,
        height:116,
        borderRadius:8,
        justifyContent:"space-between",
        alignItems:"center",
        paddingVertical:20,
    },
    title:{
        fontFamily:theme.fonts.title700,
        color:theme.colors.reading,
        fontSize:15,
        marginTop:15
    },
    check:{
        position:"absolute",//me permite mover o objeto livremente, POSITION ABSOLUTE não é afetada pelo justifyContent ou pelo alignItems, logo meu layout não quebra
        top:7, //7px no topo
        right:7, //7px na direita, assim definindo sua posição
        width:12,
        height:12,
        backgroundColor:theme.colors.secondary100,
        //alignSelf:"flex-end", //coloca esse quadrado no fim, ou seja, na direita nesse caso
        borderColor:theme.colors.secondary50,
        borderWidth:2,
        borderRadius:3
    },
    checked:{
        position:"absolute",
        top:7,
        right:7,
        width:10,
        height:10,
        backgroundColor:theme.colors.primary,
        borderRadius:3
    }
});