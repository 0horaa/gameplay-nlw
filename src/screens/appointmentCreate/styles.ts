import {StyleSheet} from "react-native";
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex:1
    },
    label:{
        fontFamily:theme.fonts.title700,
        fontSize:18,
        color:theme.colors.reading
    },
    form:{
        paddingHorizontal:24,
        marginTop:32
    },
    select:{
        width:"100%",
        height:68,
        flexDirection:"row",
        alignItems:"center",
        borderColor:theme.colors.secondary50,
        borderWidth:1,
        borderRadius:8,
        paddingRight:25,
        overflow:"hidden", //essa propriedade faz com que elementos dentro dele com a mesma altura "se encaixem" nele perfeitamente
    },
    selectBody:{
        flex:1, //por ter o flex de 1 na view do texto, automaticamente ele vai ocupar o espaço disponível e empurrar a setinha pro lado
        alignItems:"center",
    },
    image:{
        width:64,
        height:68,
        backgroundColor:theme.colors.secondary40,
        borderWidth:1,
        borderColor:theme.colors.secondary50,
        borderRadius:8
    },
    field:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:30,
        alignItems:"center"
    },
    column:{
        flexDirection:"row",
        alignItems:"center"
    },
    divider:{
        marginRight:4,
        fontFamily:theme.fonts.text500,
        fontSize:15,
        color:theme.colors.highlight
    },
    charactersLimit:{
        fontFamily:theme.fonts.text400,
        fontSize:13,
        color:theme.colors.highlight
    },
    footer:{
        marginVertical:20,
        marginBottom:56 //equivalente ao tamanho do botão, pra dar uma "folga" quando o teclado aparece
    }
});