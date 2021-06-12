const axios = require('axios');

const functions = {
    fetchUser : () => {
        return axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then((response)=>{
            return response.data;
        }).catch((err)=>{
            return 'error';
        });
    },
   
}

module.exports = functions;