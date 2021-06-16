const axios = require('axios');

const arrayFunction = () =>{
    return axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then((response)=>{
        return response.data;
    }).catch((err)=>{
        console.log('Error');
    });
};