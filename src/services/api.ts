import axios from "axios"; //axios é o gerenciador para consumo de APIS

export const api = axios.create({ //exporta a variável do axios que se conecta à essa URL base
    baseURL:"https://discord.com/api"
});