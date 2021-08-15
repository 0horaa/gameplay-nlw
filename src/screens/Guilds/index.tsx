import React, {useState, useEffect} from "react";
import {View, FlatList} from "react-native";

import {Guild, GuildProps} from "../../components/Guild/index";
import {ListDivider} from "../../components/ListDivider/index";
import {Loading} from "../../components/Loading/index";

import {styles} from "./styles";

import {api} from "../../services/api";

type Props = {
    handleGuildSelect: (guild:GuildProps) => void; //define um parâmetro com os tipos do GuildProps que não retorna nada
}

export function Guilds({handleGuildSelect} : Props){
    const [guilds, setGuilds] = useState<GuildProps[]>([]); //começa como um vetor vazio do tipo GuildProps como vetor
    const [loading, setLoading] = useState(true);

    async function fetchGuilds(){
        const response = await api.get("/users/@me/guilds"); //pega os dados das guildas das quais o usuaário faz parte
        
        setGuilds(response.data); //armazena no estado guilds o valor de resposta das guildas fornecido pela API 
        setLoading(false); //seta o Loading como false
    }
 
    useEffect(() => { //useEffect é o melhor hook para chamar a função, pois ele executa-a no momento em que a tela está renderizando
        fetchGuilds();
    },[]);

    return(
        <View style={styles.container}>
            {
                loading ? <Loading/> : //caso o loading seja true, mostra o componente de Loading
                                        //senão, carrega a lista
                <FlatList
                    data={guilds}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <Guild data={item} onPress={() => handleGuildSelect(item)}/>
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom:68, paddingTop:103}/*
                        com o paddingTop sendo escrito dessa forma, esse espaçamento
                        é aproveitado na rolagem da lista, permitindo o maior aproveitamento
                        do espaço de cima
                    */}
                    ListHeaderComponent={() => <ListDivider isCentered={true}/> /*adiciona o Divisor no topo da lista*/}
                    ItemSeparatorComponent={() => <ListDivider isCentered={true}/>}
                    style={styles.guilds}
                />
            }
        </View>
    )/*BASICAMENTE, O HANDLEGUILDSELECT é chamado com o item como parâmetro, ou seja,
       é uma tipagem que leva em conta uma função com um parâmetro que retorna um void,
       então quando ele apertar no botão, ele vai receber essa função no appointmentCreate
       e vai atribuir a ele o valor do estado pra setar o cara que foi apertado e devolver ele,
       ou seja, o estado vai receber o valor da instância item e guardar o que foi pressionado
     */
}