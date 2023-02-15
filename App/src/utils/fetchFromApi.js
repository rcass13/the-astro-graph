import axios from 'axios';





console.log(process.env.API_KEY)
const BASE_URL = 'https://sameer-kumar-aztro-v1.p.rapidapi.com/';

const options = {
    method: 'POST',
    url: BASE_URL,
    params: {
        sign: 'aquarius', 
        day: 'today'
    },
    headers: {
        'X-RapidAPI-Key': 'ca8abd6dc7msh6e57db756918508p11b024jsne3ebcd61d8ee',
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
    }
}

export const fetchFromAPI = async (url) => {
    const { data } = await axios( options);

    return data;
}


