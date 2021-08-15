import {StyleSheet} from "react-native"
import {getBottomSpace} from "react-native-iphone-x-helper"; //pega o espaço de baixo dos iphones 
import {theme} from "../../global/styles/theme";

export const styles = StyleSheet.create({
    banner:{
        width:"100%",
        height:234,
        marginBottom:30
    },
    bannerContent:{
        flex:1,
        justifyContent:"flex-end",
        paddingHorizontal:24,
        marginBottom:30
    },
    title:{
        fontFamily:theme.fonts.title700,
        fontSize:28,
        color:theme.colors.reading
    },
    subtitle:{
        fontFamily:theme.fonts.text400,
        fontSize:13,
        color:theme.colors.reading,
        lineHeight:21
    },
    membersList:{
        marginLeft:24,
        marginTop:27
    },
    footer:{
        marginHorizontal:24,
        marginBottom:getBottomSpace() + 20,
        marginTop:20
    },
    errorContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:24,
        marginVertical:12,
    },
    errorMessage:{
        fontFamily:theme.fonts.title500,
        fontSize:14,
        color:theme.colors.highlight,
        textAlign:"center",
        marginBottom:3
    }
});