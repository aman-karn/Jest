const { expect } = require('@jest/globals');
const functions = require('./app');

test('Address Street ',()=>{
   
     functions.fetchUser()
    .then(data => {
        const address = {} = data.address;
        //console.log(address);
        expect(address.street).toEqual('Kulas Light');
        
    });
    
} );
test('Adress Geo Lat ',()=>{
   
    functions.fetchUser()
   .then(data => {
       const address = {} = data.address;
       //console.log(address);
       expect(address.geo.lat).toEqual('-37.3159');
       
   });
   
} );

