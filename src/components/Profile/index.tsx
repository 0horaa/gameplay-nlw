import React, {useState} from "react";
import {View, Text, Alert, TouchableOpacity} from "react-native";
import {RectButton} from "react-native-gesture-handler";

import {ModalSignOut} from "../../components/ModalSignOut/index";

import {styles} from "./styles";
import {Avatar} from "../Avatar/index";

import {useAuth} from "../../hooks/auth";

export function Profile(){

    const {user, signOut} = useAuth();
    const [openModalSignOut, setOpenModalSignOut] = useState(false);


    function handleOpenModalSignOut(){
        /*
            Alert.alert("Logout", "Deseja sair do GamePlay?", 
            [
                {
                    text:"Não",
                    style:"cancel"
                },
                {
                    text:"Sim",
                    onPress:() => signOut()
                }
            ]
            );
        */
        setOpenModalSignOut(true);
    }

    function handleCloseModalSignOut(){
        setOpenModalSignOut(false);
    }

    return(
        <View style={styles.container}>

            <RectButton onPress={handleOpenModalSignOut}>
                <Avatar urlImage={user.avatar}></Avatar>
            </RectButton>

            <View>
                <View style={styles.user}>
                    <Text style={styles.gretting}>Olá,</Text>
                    <Text style={styles.username}>{user.firstName}</Text>
                </View>

                <Text style={styles.message}>Hoje é dia de vitória</Text>
            </View>

            <ModalSignOut visible={openModalSignOut}>
                <>
                    <View style={styles.textModalContainer}>
                        <Text style={[styles.defaultFontSize, styles.initialMessage]}>Deseja sair do </Text>
                        <Text style={[styles.defaultFontSize, styles.whiteMessage]}>Game</Text>
                        <Text style={[styles.defaultFontSize, styles.redMessage]}>Play</Text>
                        <Text style={[styles.defaultFontSize, styles.whiteMessage]}>?</Text> 
                    </View>

                    <View style={styles.buttonsModalContainer}>

                        <View style={styles.backgroundCancelButton}>
                            <TouchableOpacity onPress={handleCloseModalSignOut} activeOpacity={0.7} style={styles.cancelButton}>
                                <Text style={styles.buttonText}>Não</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.backgroundConfirmButton}>
                            <TouchableOpacity onPress={signOut} activeOpacity={0.5} style={styles.confirmButton}>
                                <Text style={styles.buttonText}>Sim</Text>           
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            </ModalSignOut>
        </View>
    );
}