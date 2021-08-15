import React, {useState} from "react";
import {RectButton} from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Text, View, ScrollView, KeyboardAvoidingView, Platform, Modal} from "react-native";
import {useNavigation} from "@react-navigation/native";
//o Platform acima serve pra importar características específicas do Android e do IOS
//Modal serve pra abrir uma screen sobre a outra

import {COLLECTION_APPOINTMENTS} from "../../config/database";
import {Feather} from "@expo/vector-icons";
import uuid from "react-native-uuid"; //importa o objeto que gera o id aleatório

import {Background} from "../../components/Background/index";
import {Header} from "../../components/Header/index";
import {CategorySelect} from "../../components/CategorySelect/index";
import {GuildIcon} from "../../components/GuildIcon/index";
import {SmallInput} from "../../components/SmallInput/index";
import {TextArea} from "../../components/TextArea/index";
import {Button} from "../../components/Button/index";
import {ModalView} from "../../components/ModalView/index";
import {GuildProps} from "../../components/Guild/index"; //importa a tipagem do arquivo index do Guild
import {Guilds} from "../Guilds/index";

import {styles} from "./styles";
import {theme} from "../../global/styles/theme";

export function AppointmentCreate(){
    const [category, setCategory] = useState("1");
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
    //acima cria um estado que usa por padrão um objeto do tipo GuildProps

    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [description, setDescription] = useState("");

    const navigation = useNavigation();

    function handleCategorySelect(categoryId : string){
        setCategory(categoryId);
    }

    function handleOpenGuildsModal(){
        setOpenGuildsModal(true); //seta o openGuilds como true, assim tornando-o visível
    }
    function handleCloseGuildsModal(){
        setOpenGuildsModal(false);
    }

    function handleGuildSelect(guildParameter : GuildProps){ //um atributo recebe o tipo GuildProps
        setGuild(guildParameter) //muda o estado do guild, o selecionando como a guilda que for apertada
        setOpenGuildsModal(false); //fecha o modal quando um servidor é selecionado
    }

    async function handleSaveAppointment(){
        const newAppointment = {
            id: uuid.v4(),
            guild:guild,
            category:category,
            date: `${day}/${month} às ${hour}:${minute}h`, //formata a data com dia, mês, hora e minuto
            description:description
        }

        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS); //pega o COLLECTION_APPOINTMENTS
        const appointments = storage ? JSON.parse(storage) : []; //se houver algo no storage, repasse-o como um um objeto JSON, senão, passe um vetor vazio

        await AsyncStorage.setItem(
            COLLECTION_APPOINTMENTS,
            JSON.stringify([...appointments, newAppointment]) //salva todos os itens que já existem (appointments) e o que foi criado agora (newAppointment)
        );

        navigation.navigate("Home"); //leva de volta pra Home
    }

    return(//KeyboradAvoindingView faz com que a tela suba junto com o teclado quando este é aberto
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} /*ou seja, se o s.o for IOS, ele ajusta a interface com padding; se for no android, ele mexe na altura*/ 
            style={styles.container}
        > 
            <Background>
                <ScrollView /*usa a ScrollView pra permitir as mudanças de altura do KeyboardAvoindingView*/>
                    <Header title="Agendar partida"/>

                    <Text style={[styles.label, {marginLeft:24, marginTop:36, marginBottom:18}]}>Categoria</Text>

                    <CategorySelect hasCheckBox={true} setCategory={handleCategorySelect} categorySelected={category}/>
                    
                    <View style={styles.form}>
                        <RectButton onPress={handleOpenGuildsModal /*abre o modal ao apertar esse btn*/}>
                            <View style={styles.select}>
                                {
                                    guild.icon ? <GuildIcon guildId={guild.id} iconId={guild.icon}/> : <View style={styles.image}></View>
                                    /*se o ícone da guilda existir, ou seja, se o cara selecionar
                                    uma guilda, vai mostrar o ícone da guilda que ele selecionou, senão,
                                    vai mostrar a imagem vazia 
                                    */
                                }
                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name ? guild.name : "Selecione um servidor"
                                            /*se o nome da guilda existir, ou seja, se o cara selecionar
                                            uma guilda, vai mostrar a guilda que ele selecionou, senão,
                                            vai mostrar o "Selecione um servidor"
                                            */
                                        }
                                    </Text>
                                </View>

                                <Feather name="chevron-right" color={theme.colors.reading} size={18}/>

                            </View>
                        </RectButton>

                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label, {marginBottom:12}]}>Dia e mês</Text>

                                <View style={styles.column}>
                                    <SmallInput 
                                        maxLength={2 /*aceita no máximo 2 dígitos*/}
                                        onChangeText={setDay}
                                    />
                                    <Text style={styles.divider}>/</Text>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setMonth}
                                    />
                                </View>
                            </View>

                            <View>
                                <Text style={[styles.label, {marginBottom:12}]}>Hora e minuto</Text>

                                <View style={styles.column}>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setHour}
                                    />
                                    <Text style={styles.divider}>:</Text>
                                    <SmallInput 
                                        maxLength={2}
                                        onChangeText={setMinute}
                                    />
                                </View>
                            </View>

                        </View>

                        <View style={[styles.field, {marginBottom:12}]}>
                            <Text style={styles.label}>Descrição</Text>
                            <Text style={styles.charactersLimit}>Max 100 caracteres</Text>
                        </View>
                        
                        <TextArea 
                            multiline={true} /*permite que o usuário escreva em várias linhas*/
                            maxLength={100}
                            numberOfLines={5} /*aceita no máximo 5 quebras de linha*/
                            autoCorrect={false} /*remove a função do corretor do celular*/
                            onChangeText={setDescription}
                        ></TextArea>

                        <View style={styles.footer}>
                            <Button title="Agendar" onPress={handleSaveAppointment}/>
                        </View>
                    
                    </View>
                </ScrollView>
            </Background>
            <ModalView visible={openGuildsModal} closeModal={handleCloseGuildsModal}>
                <Guilds handleGuildSelect={handleGuildSelect}/>
            </ModalView>
        </KeyboardAvoidingView>
    );
}