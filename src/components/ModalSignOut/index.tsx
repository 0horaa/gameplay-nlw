import React, {ReactNode} from "react";
import {Modal, ModalProps, TouchableWithoutFeedback, View} from "react-native";

import {Background} from "../../components/Background/index";

import {styles} from "./styles";

type Props = ModalProps & {
    children:ReactNode;
}

export function ModalSignOut({children,  ...rest} : Props){
    return(
        <Modal
            transparent={true}
            animationType="fade"
            statusBarTranslucent={true}
            {...rest}
        >
            <TouchableWithoutFeedback>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}