import React, {ReactNode} from "react";
import {View, Modal, ModalProps, TouchableWithoutFeedback} from "react-native";
//Modal serve pra abrir uma screen sobre a outra

import {Background} from "../Background/index";

import {styles} from "./styles";

type Props = ModalProps & {
    children:ReactNode;
    closeModal: () => void; //uma função como tipagem
}

//Modal - Atributos
    //transparent define o modal como transparente
    //animationType define o tipo de animação presente no modal (no caso aqui foi usado o slide)
export function ModalView({children, closeModal, ...rest} : Props){
    return(
        <Modal
            transparent={true}
            animationType="slide"
            statusBarTranslucent={true /*
                faz com que o modal cubra a barra de status do celular
            */} 
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.bar}/>
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}