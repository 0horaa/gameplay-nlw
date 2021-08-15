import React, {useState} from "react"; //useState funciona pra criar um Estado da interface
import{
    View, 
    Text, 
    Image,
    Alert,
    ActivityIndicator
} from "react-native";  //importa os componentes nativos do React Native
//import {useNavigation} from "@react-navigation/native"; //importa o componente pra manipular as navegações

import IllustrationImg from "../../assets/illustration.png"; //importa a imagem 

import {ButtonIcon} from "../../components/ButtonIcon/index"; //importa a função ButtonIcon do arquivo index, que contêm a estrutura e estilização do botão
import {Background} from "../../components/Background/index";

import {styles} from "./styles"; //importa o objeto styles do arquivo de estilização 
import {theme} from "../../global/styles/theme";

import {useAuth} from "../../hooks/auth";

export function SignIn(){
    //const [text, setText] = useState(""); //cria o estado inicial da aplicação e define seu valor como ""
    //o nome do estado é text
    //o nome da função que vai alterar esse estado é setText

    const {loading, signIn} = useAuth(); //recupera o objeto user que está dentro do value do AuthContext, e também a função signIn

    //const navigation = useNavigation();

    async function handleSignIn(){
        try{
            await signIn(); //chama a função signIn com um await pra que a função espere um valor da sua promessa
        }catch(error){
            Alert.alert(error);
        }
    }

    return( //aplica abaixo na propriedade styles a propriedade container, dando á View a estilização do objeto container definido no styles.ts
        <Background>
            <View style={styles.container}>
                
                <Image source={IllustrationImg} style={styles.image} resizeMode="stretch"></Image>

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {"\n"} 
                        e organize suas {"\n"} 
                        jogatinas
                    </Text>
                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {"\n"}
                        favoritos com seus amigos
                    </Text>

                    {
                        loading === true ? //caso esteja carregando, mostra o componente de carregamento
                            <ActivityIndicator size="large" color={theme.colors.primary}/> 
                        : //senão, mostre o botão
                            <ButtonIcon title="Entrar com Discord" onPress={handleSignIn}></ButtonIcon>
                        
                    }
                    
                </View>

            </View>
        </Background>
    ) 
    //onPress define que quando o botão for apertado, ele vai ativar determinada função


    /*onChangeText verifica mudanças no texto do input, quando a mudança ocorre, a função setText é
        chamada e atribui o valor do TextInput ao valor do estado, assim alterando o valor do estado
        dinamicamente
      */
}