const fetch = require('node-fetch')
const url = "https://restcountries.eu/rest/v2/"

const infor = (async ()=>{
    try{
        const contry = await fetch(url)
        const countryJson = await contry.json()
        const data = await countryJson
        console.log(data)
    }
    catch{
        err=>{console.log(err)}
    }
})()