
const axios = require('axios')
const url = `https://api.publicapis.org/entries`

const getData = async() => {
    try{
        const res = await axios.get(url)
        res.data.entries.sort((a,b)=>b.API.localeCompare(a.API,{sensitivity: 'base'}))
        console.log(res.data);
        return res.data
    }catch(err){
        console.log('Error at get data',err);
    }
}



console.log(process.argv.slice(2));