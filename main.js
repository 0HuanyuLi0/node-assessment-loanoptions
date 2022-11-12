
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
    let args = process.argv.slice(2)
    const argsObj = {}
    // Assign arguments according to their type
    args.forEach(arg => {
        if (isNaN(parseInt(arg))) {
            argsObj.category = arg
        } else {
            argsObj.limit = parseInt(arg)
        }
    })

    if (argsObj.limit < 1) {
        // input check
        console.log(`Please enter a positive number`)
        return
    }

    const { count, entries } = await getData()

    if (args.length === 0) {
        // no arguments -> return whole data
        console.log({ count, entries })
        return
    }

    if (!argsObj.category) {
        // no category argument -> return the first 'n' of data
        console.log(entries.slice(0, argsObj.limit))
        return
    }

    let results = entries.filter(item => item.Category.toUpperCase() === argsObj.category.toUpperCase())

    if (results.length === 0) {
        console.log(`No results`);
        return
    }

    if (!argsObj.limit) {
        // no limit argument -> return all data in that category
        console.log(results);
        return
    }

    console.log(results.slice(0, argsObj.limit));
    return
}

showResults()