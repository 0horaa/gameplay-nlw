import React from "react"; //importa a biblioteca do React pra utilizar o JSX 
import {StatusBar} from "react-native";
import {useFonts} from "expo-font"; //importa da biblioteca que foi instalada: expo-font, uma função pra carregamento de fontes
import {Inter_400Regular, Inter_500Medium} from "@expo-google-fonts/inter"; //importa as fontes que eu instalei
import {Rajdhani_500Medium, Rajdhani_700Bold} from "@expo-google-fonts/rajdhani";
import AppLoading from "expo-app-loading"; //componente do splash

//import {SignIn} from "./src/screens/signin/index"; //importa a função SignIn do arquivo index.tsx, lembre de utilizar o ./ pra sair do node_modules
import {Background} from "./src/components/Background/index";
import {Routes} from "./src/routes/index";

import {AuthProvider} from "./src/hooks/auth";

export default function App(){ //exporta uma função de retorno para o usuário
  const [fontsLoaded] = useFonts({ //carrega as fontes importadas
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){ //enquanto as fontes não carregarem
    return(<AppLoading/>) //segure a tela de splash
  }

  //StatusBar - Propriedades
        //barStyle = light-content define a cor dos icones como brancos
        //backgroundColor define a cor da barra como transparente
        //translucent faz com que a barra fique dentro da tela da aplicação
  return( //componentes que serão renderizados, o <> serve como uma espécie de "view invisível" que faz com que seja possível agrupar vários componentes
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true}/>
      
      <AuthProvider>
        <Routes></Routes>
      </AuthProvider>
    </Background>
  ); /* 
      AuthContext envolve as rotas para que todas as rotas tenham acesso aos valores desse contexto,
      nisso ele é definido como Provider (provedor dos valores) e seu valor é definido na propriedade
      value
  */
}