import React, {createContext, useContext, useState, ReactNode, useEffect} from "react"; //createContext é usado pra criar nossos contextos
import * as AuthSession from "expo-auth-session"; //importa tudo de AuthSession
import AsyncStorage from "@react-native-async-storage/async-storage"; //importa o AsyncStorage

const {SCOPE} = process.env;
const {CLIENT_ID} = process.env;
const {CDN_IMAGE} = process.env;
const {RESPONSE_TYPE} = process.env;

import {COLLECTION_USERS, COLLECTION_APPOINTMENTS} from "../config/database";
import {api} from "../services/api";

type User = {
    id:string;
    username:string;
    firstName:string;
    avatar:string;
    email:string;
    token:string;
}

type AuthContextData = {
    user:User;
    loading:boolean;
    signIn: () => Promise<void>; //basicamente, o contexto vai receber nesse tipo uma função como Promise(promessa), já que esse processo pode levar um tempo e as Promises são ideais pra isso
    signOut: () => Promise<void>;
}

type AuthProviderProps = {
    children:ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & { //pega as informações de resposta de autenticação
    params:{
        access_token?:string;
        error?:string;
    }
}

export const AuthContext = createContext({} as AuthContextData); 
/*esse contexto começa como um objeto vazio, mas é do tipo AuthContextData, ou seja, 
está pronto pra receber todos aqueles dados do User
*/

function AuthProvider({children} : AuthProviderProps){

    const [user, setUser] = useState<User>({} as User); //é um estado que começa como um objeto vazio do tipo User
    const [loading, setLoading] = useState(false);

    async function signIn(){ //a função precisa ser assíncrona por lidar com recursos assíncronos
        try{
            const redirectURI = AuthSession.makeRedirectUri({ useProxy: true });
            setLoading(true);

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirectURI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
            //const authUrl = "";

            const {type, params} = await AuthSession.startAsync({authUrl}) as AuthorizationResponse; //diz pra onde o usuário deve ir quando iniciar o processo de autenticação
            //esse await serve pra esperar a autenticação e retornar o valor somente quando o usuário autenticar

            if(type === "success" && !params.error){ //o params.error é pra definir caso o usuário aperte em "cancelar" na tela de autenticação discord
                api.defaults.headers.authorization = `Bearer ${params.access_token}`; //recupera o token de acesso no cabeçalho da requisição
                
                const userInfo = await api.get("/users/@me"); //essa rota pega as informações do usuário de acordo com o token gerado

                const firstName = userInfo.data.username.split(" ")[0]; //separa o nome do usuário em dois itens num vetor a partir do espaço, e pega o primeiro vetor [0]
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`; //põe a URL da imagem de avatar corretamente
                
                const userData = {
                    ...userInfo.data, //pega todos os dados de data (id, username, avatar, email)
                    firstName, //variável que eu criei que formata o nome
                    token:params.access_token //pega o token de autenticação
                }

                await AsyncStorage.setItem( //salva os dados no dispositivo com o AsyncStorage
                    COLLECTION_USERS, //diz o nome da chave que vai referenciar o objeto salvo
                    JSON.stringify( //passa o objeto de JSON pra String porque o AsyncStorage entende apenas em String
                        userData //salva os dados pegos na autenticação 
                    )
                );

                setUser(userData);

                setLoading(false); //sem necessidade esses dois aqui já que têm o finally, mas vou manter mesmo assim
            }else{
                setLoading(false);
            }

        }catch{
            throw new Error("Não foi possível realizar a autenticação"); //lança uma mensagem de erro
        }finally{
            setLoading(false); //diz que indepententemente de qualquer coisa, o setLoading vai ser false
        }
    }

    async function signOut(){
        setUser({} as User);
        await AsyncStorage.removeItem(COLLECTION_USERS);
    }

    async function loadUserStorageData(){
        const storage = await AsyncStorage.getItem(COLLECTION_USERS); //pega os dados armazenados no dispositivo a partir da coleção
        
        if(storage){ //se existir alguma coisa armazenada
            const userLogged = JSON.parse(storage) as User; //faz o processo inverso, passsando o storage que é uma string pra um JSON novamente
            api.defaults.headers.authorization = `Bearer ${userLogged.token}`; //pega o token armazenado no dispositivo e passa pra requisição
        
            setUser(userLogged); //muda o estado e põe nele os dados armazenados
        }
    }

    useEffect(() => {  //usa o useEffect pra utilizar a função, já que ele executa-a ativamente sempre que o app for atualizado
        loadUserStorageData();
    },[]); 

    return(
        <AuthContext.Provider value={{
            user,
            loading,
            signIn, //dessa forma, as páginas que fazem parte do contexto podem ter acesso a essa função
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export{
    AuthProvider,
    useAuth
}