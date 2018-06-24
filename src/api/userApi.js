import 'whatwg-fetch';  //pollyphil for cross browser support
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
    return get('users');
}

function get(url){
    return fetch(baseUrl + url).then(onSuccess,onError);
}

function onSuccess(response){
    return response.json();
}

function onError(error){
    console.log(error);
}