import React, {useState, useCallback} from "react";
import {View, FlatList} from "react-native";
import {useNavigation, useFocusEffect} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {Background} from "../../components/Background/index";
import {Profile} from "../../components/Profile/index";
import {ButtonAdd} from "../../components/ButtonAdd/index";
import {CategorySelect} from "../../components/CategorySelect/index";
import {ListHeader} from "../../components/ListHeader/index";
import {Appointment, AppointmentProps} from "../../components/Appointment/index";
import {ListDivider} from "../../components/ListDivider/index";
import {Loading} from "../../components/Loading/index";

import {styles} from "./styles";
import {COLLECTION_APPOINTMENTS} from "../../config/database";

export function Home(){
    
    const navigation = useNavigation();
    
    function handleAppointmentDetails(guildSelectedParameter : AppointmentProps){
        navigation.navigate("AppointmentDetails", {guildSelected : guildSelectedParameter}); 
        //acima passa na navegação um dado, que recebe o parâmetro definido na chamada da função   
    }

    function handleAppointmentCreate(){
        navigation.navigate("AppointmentCreate");
    }

    const [category, setCategory] = useState("");
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
    const [loading, setLoading] = useState(true);

    function handleCategorySelect(categoryId : string){ //passa um parâmetro na função do tipo string
        //categoryId === category ? setCategory("") : setCategory(categoryId);
        //se categoryId passado como parâmetro for igual ao category do estado, então setCategory como nada
        //senão, setCategory como o id que eu estou apertando 
        if(categoryId === category){
            setCategory("");
        }else{
            setCategory(categoryId);
        }
    }

    async function loadAppointments(){
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS); //pega o que tá armazenado dentro de COLLECTION_APPOINTMENTS
        const storage : AppointmentProps[] = response ? JSON.parse(response) : []; //caso haja algum agendamento armazenado, passe esse armazenamento, senão, passe um vetor vazio
        //a variávela acima é do tipo AppointmentProps como vetor, então está pronta pra receber os dados 

        if(category){
            setAppointments(storage.filter(item => item.category === category));
            //se a categoria estiver selecionada, então:
                //filtre os dados e atribua ao estado somente os itens em que a categoria deles seja igual ao estado do category
        }else{ 
            setAppointments(storage); //senão, mostre todos os dados
        }

        setLoading(false);
    }

    //quando a tela estiver no foco, ele vai chamar o useFocusEffect
    useFocusEffect(useCallback(() => { //useCallback serve pra evitar reconstrução da função, já que ele salva a função em memória e assim a reproduz mais rapidamente
        loadAppointments();
    }, [category])); //tem como vetor de dependência um Estado, escolhi o category pois essa função é recarregada a partir de mudanças nesse estado

    return(
        <Background>
            <View style={styles.header}>
                <Profile></Profile>
                <ButtonAdd onPress={handleAppointmentCreate}></ButtonAdd>
            </View>

            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>

            {
                loading === true ? <Loading/> : //se loading for true, mostre o componente de loading
                <>
                    <View style={styles.content}>
                        <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`}/>
                    </View>

                    <FlatList 
                        data={appointments} 
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <Appointment data={item} onPress={() => handleAppointmentDetails(item)}></Appointment>
                        )}
                        style={styles.matches}
                        contentContainerStyle={{paddingBottom:69}/*é uma estilização adicionada à lista*/} 
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <ListDivider/>}
                    />
                </>
            }
        </Background>
    );  //na FLatList usa o objeto geral dos dados no data pra definir os dados que serão usados
            //define uma chave pra cada item da lista usando o keyExtractor
            //renderItem renderiza os componentes com base nos objetos dentro do vetor appointments
        //showsVerticalScrollIndicator garante que não aparecerá nenhuma barra de rolagem
        //ItemSeparatorComponent define um componente como separador de itens automaticamente
}