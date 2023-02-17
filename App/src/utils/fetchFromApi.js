import axios from 'axios';

// let sign = getUserInfoApi()
// getUserId();

// function getUserId() {
//     fetch(`http://localhost:3001/api/auth/${id}`, {
//       method: 'get',
//       headers: {
//         'Content-Type': 'application/json'
//       }
      
//     })
//       .then(res => {
//         if (!res.ok) {
//           throw Error(res.statusText);
//         }
//         return res.json();
//       })
//       .then(data => {
//         console.log(data.sign)
//         return data.sign
        
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
// }



console.log(process.env.API_KEY)
const BASE_URL = 'https://sameer-kumar-aztro-v1.p.rapidapi.com/';



export const fetchFromAPI = async (sign) => {
    console.log(sign)
    const options = {
        method: 'POST',
        url: BASE_URL,
        params: {
            sign: sign, 
            day: 'today'
        },
        headers: {
            'X-RapidAPI-Key': 'ca8abd6dc7msh6e57db756918508p11b024jsne3ebcd61d8ee',
            'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
        }
    }
    const { data } = await axios( options);

    return data;
}


