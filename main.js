
const axios = require('axios')
const url = `https://api.publicapis.org/entries`

const getData = async () => {
    try {
        const res = await axios.get(url)
        res.data.entries.sort((a, b) => b.API.localeCompare(a.API, { sensitivity: 'base' }))
        return res.data
    } catch (err) {
        console.log('Error at get data', err);
    }
}


const showResults = async () => {
    let [category, limit, ...others] = process.argv.slice(2)
    const { count, entries } = await getData()
    let results = []
    entries.every(item => {
        if (item.Category.toUpperCase() === category.toUpperCase()) {
            limit -= 1
            results.push(item)
        }
        // false -> stop loop 
        if (limit < 1) return false
        else return true
    })
    if (results.length < 1) {
        console.log(`No results`)
        return `No results`
    } else {
        console.log(results)
        return results
    }
}

showResults()