declare module "*.svg"{ //sobreescreve as configurações e importações de módulos/arquivos svg
    import React from "react";
    import {SvgProps} from "react-native-svg"; //SvgProps carrega as propriedades possíveis pra um .svg
    const content : React.FC<SvgProps>; //define o retorno de content como um FC (Funcional Component) do React com as propriedades do SvgProps
    export default content; //exporta todos os arquivos svg como esse conteúdo tipado como Component
}