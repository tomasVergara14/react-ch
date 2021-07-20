const fetch = require('node-fetch')
const url = 'https://catfact.ninja/fact';
const data = ( async () => {
    try{
        
        const fee = await fetch(url)
        const info = await  fee.json()
        const data = await info.fact
        console.log(data) 
    }
    catch(err){console.log(err)}
})();