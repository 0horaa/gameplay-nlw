import React, {useState, useEffect} from "react";
import * as Linking from "expo-linking"; //importa a biblioteca de link do expo
import {ImageBackground, Text, View, FlatList, Share, Platform, Alert} from "react-native"; //imageBackground realiza a importação de imagens de fundo
import {BorderlessButton} from "react-native-gesture-handler"
import {useRoute} from "@react-navigation/native"; //consegue utilizar as rotas para recuperar dados passados na mudança de tela
import {Fontisto, MaterialCommunityIcons} from "@expo/vector-icons"; //outra biblioteca de ícones (ícone de compartilhamento)

import {Background} from "../../components/Background/index";
import {Header} from "../../components/Header/index";
import {ListHeader} from "../../components/ListHeader/index";
import {Member, MemberProps} from "../../components/Member/index";
import {ListDivider} from "../../components/ListDivider/index";
import {ButtonIcon} from "../../components/ButtonIcon/index";
import {AppointmentProps} from "../../components/Appointment/index";
import {Loading} from "../../components/Loading/index";

import {styles} from "./styles";
import {theme} from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png";
import {api} from "../../services/api";

type Params = {
    guildSelected:AppointmentProps; //cria um tipo tendo como base um objeto com o AppointmentProps
}

type GuildWidget = {
    id:string;
    name:string;
    instant_invite:string;
    members:MemberProps[]; //pega o MemberProps como vetor porque pode ser vários membros
}

export function AppointmentDetails(){

    const route = useRoute(); //usa as rotas pra recuperar os dados passados por ela
    const {guildSelected} = route.params as Params; //diz que o params das rotas é do tipo AppointmentProps, assim permitindo que eu recupere os dados com os nomes que eu quero dos objetos
    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function fetchGuildWidget(){
        try{
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`); //busca na api do discord com base no ID passado pela rota no arquivo widget.json
            setWidget(response.data);
        }catch(error){
            setError(true);
            //Alert.alert(`Por favor, habilite o Widget nas configurações do servidor`);
        }finally{
            setLoading(false);
        }
    }

    function handleShareInvitation(){
        try{
            const message = Platform.OS === "ios"
            ? `Junte-se à ${guildSelected.guild.name}`
            : widget.instant_invite; //usa a api do discord pra passar diretamente o convite

            Share.share({ //abre a tela de compartilhamento com a mensagem especificada e a url de redirecionamento
                message,
                url:widget.instant_invite
            });
        }catch(error){
            Alert.alert(
                "Houve um problema", 
                "Para permitir um convite, vá em > Config. do servidor > Widget e selecione um canal de convite qualquer. Após isso, reinicie o app. \n\nObs: você precisa de um cargo administrativo pra fazer isso.");
        }
    }

    function handleOpenGuild(){
        try{
            if(widget.instant_invite){
                Linking.openURL(widget.instant_invite);
            }else{
                Alert.alert(
                    "Houve um problema",
                    "Para entrar no servidor pelo app, habilite os widgets nas configurações do servidor do Discord. \n\nObs: você precisa de um cargo administrativo pra fazer isso."
                );
            }
        }catch(error){
            Alert.alert(
                "Houve um problema",
                "Para entrar no servidor pelo app, habilite os widgets nas configurações do servidor do Discord. \n\nObs: você precisa de um cargo administrativo pra fazer isso."
            );
        }
    }

    useEffect(() => {
        fetchGuildWidget();
    }, [])

    return(
        <Background>
            <Header title="Detalhes" action={
                //guildSelected.guild.owner === true &&
                <BorderlessButton onPress={handleShareInvitation}>
                    <Fontisto name="share" size={24} color={theme.colors.primary}/>
                </BorderlessButton>
            }/>

            <ImageBackground source={BannerImg} style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>{guildSelected.guild.name}</Text>
                    <Text style={styles.subtitle}>{guildSelected.description}</Text>
                </View>
            </ImageBackground>

            {
                loading === true ? <Loading/> :
                <>
                    <ListHeader title="Jogadores" subtitle={
                        error === false ? `Total ${widget.members.length}` : "Total 0"
                    }/>
                        
                    {
                        error === true &&
                        <View style={styles.errorContainer}>
                            <Text style={styles.errorMessage}>Não foi possível visualizar os membros. Por favor, habilite os widgets nas configurações do servidor.</Text> 
                            <MaterialCommunityIcons name="account-search" size={44} color={theme.colors.highlight}/>
                        </View>                     
                    }

                    <FlatList
                        data={widget.members}
                        keyExtractor={item => item.id}
                        renderItem={
                            ({item}) => (
                                <Member
                                    data={item}
                                />
                            )
                        }
                        ItemSeparatorComponent={() => <ListDivider isCentered={true /*centraliza o ListDivider entre os itens*/} />}
                        style={styles.membersList}
                    />
                </>
            }

            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" onPress={handleOpenGuild}/>
            </View>
        </Background>
    );
}