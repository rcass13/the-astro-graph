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
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
    }
}

export const fetchFromAPI = async (url) => {
    const { data } = await axios( options);
    console.log(data)
    return data;
}


