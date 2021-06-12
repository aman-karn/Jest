const { expect } = require('@jest/globals');
const functions = require('./app');

test('user name as Leane Graham ',()=>{
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
    
} );


