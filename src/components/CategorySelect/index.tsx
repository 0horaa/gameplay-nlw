import React from "react";
import {ScrollView} from "react-native"; //importa uma view com possibilidade de scroll - ScrollView

import {styles} from "./styles";
import {categories} from "../../utils/categories"; //importa as categorias
import {Category} from "../Category/index";

//ScrollView - Propriedades
    //horizontal define que terá um scroll horizontal
    //showsHorizontalScrollIndicator como false desabilita a barra de rolagem padrão desse component
    //contentContainerStyle permite mudanças com CSS - O padding na direita é pra que no fim da rolagem os itens não se colem na tela


type Props = {
    categorySelected:string;
    setCategory: (categoryId : string) => void; //cria essa propriedade com um retorno vazio
    hasCheckBox?:boolean;
}

export function CategorySelect({categorySelected, setCategory, hasCheckBox = false} : Props){

    return(
        <ScrollView
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight:40}}
        >
            { //dentro das chaves há o conteúdo dessa scrollview
                categories.map(category => (//.map percorre o Array e gera um retorno pra cada um;
                    <Category 
                        key={category.id} 
                        title={category.title} 
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                        hasCheckBox={hasCheckBox}
                    />
                ))
            }
        </ScrollView>
        //Propriedades do componente personalizado Category:
            //key - pega o id do array, funciona mais por questão de performance

        //Quando a categoria for apertada, o setCategory definirá o id como o id do que foi apertado
    );
}