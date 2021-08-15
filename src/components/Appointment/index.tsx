import React from "react";
import {RectButton, RectButtonProps} from "react-native-gesture-handler";
import {View, Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

import {GuildIcon} from "../GuildIcon/index";
import {GuildProps} from "../Guild/index";

import PlayerSvg from "../../assets/player.svg";
import CalendarSvg from "../../assets/calendar.svg";

import {categories} from "../../utils/categories";
import {styles} from "./styles";
import {theme} from "../../global/styles/theme";

export type AppointmentProps = {
    id:string;
    guild:GuildProps;
    category:string;
    date:string;
    description:string;
}

type Props = RectButtonProps & {
    data:AppointmentProps;
}

export function Appointment({data, ...rest} : Props){
    const [category] = categories.filter(item => item.id === data.category);
    //cria um vetor que filtra as categorias e retorna somente o item em que o id for igual à categoria escolhida

    return(
        <RectButton {...rest}>
            <View style={styles.container}>

                <LinearGradient 
                    colors={[theme.colors.secondary50, theme.colors.secondary70]}
                    style={styles.guildIconContainer}
                >
                    <GuildIcon guildId={data.guild.id} iconId={data.guild.icon}/>
                </LinearGradient>

                <View style={styles.content}>

                    <View style={styles.header}>
                        <Text style={styles.title}>{data.guild.name}</Text>
                        <Text style={styles.category}>{category.title}</Text>
                    </View>

                    <View style={styles.footer}>

                        <View style={styles.dateInfo}>
                            <CalendarSvg/>
                            <Text style={styles.date}>{data.date}</Text>
                        </View>
                    

                        <View style={styles.playersInfo}>
                            <PlayerSvg fill={data.guild.owner === true ? theme.colors.primary : theme.colors.on}/>
                            <Text style={[
                                styles.player, 
                                {color: data.guild.owner === true ? theme.colors.primary : theme.colors.on}
                            ]}>
                                {data.guild.owner === true ? "Anfitrião" : "Visitante"}
                            </Text>
                        </View>

                    </View>

                </View>
            </View>
        </RectButton>
    )//no component PlayerSvg há o fill (cor do preenchimento) que é primary caso o cara seja dono do server, e vermelho caso não seja
            //lembrando que pra funcionar, o fill não pode estar definido anteriormente no arquivo svg
}