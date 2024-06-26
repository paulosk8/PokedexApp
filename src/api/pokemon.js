import { API_HOST } from "../utils/constante";

export async function getPokemonsApi(endpointUrl){
    console.log(endpointUrl);
    try {
        const url = `${API_HOST}/pokemon/?limit=20&offset=0`;
        const response = await fetch(endpointUrl || url);
        const result = await response.json();
        console.log(JSON.stringify(result, null,   2));
        return result;
        
    } catch (error) {
        throw error;
    }
}

export async function getPokemonDetailsByUrlApi(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}