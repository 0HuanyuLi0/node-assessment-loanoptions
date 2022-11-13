
const axios = require('axios')
const url = `https://api.publicapis.org/entries`

const apiList = {
    getData: async function () {
        try {
            console.log(`Fetching data...`);
            const res = await axios.get(url)
            res.data.entries.sort((a, b) => b.API.localeCompare(a.API, { sensitivity: 'base' }))
            return res.data
        } catch (err) {
            console.log('Error at get data', err);
        }
    },

    getArgs: function (arr) {

        const args = [...arr]
        const argsObj = {
            category:[],
            limit:[]
        }

        if (args.length === 0) {
            return null
        }
        // inputs checker
        const warning = `Error arguments.\nArguments should be:\n1.null\n2.a string\n3.a positive number\n4.a string and a number\nPlease check README.md`

        if (args.length > 2) {
            console.log(warning)
            process.exit(1)
        }

        // Assign arguments according to their type
        args.forEach(arg => {
            if (isNaN(parseInt(arg))) {
                argsObj.category.push(arg)
            } else {
                argsObj.limit.push(parseInt(arg))
            }
        })

        // inputs checker
        if (argsObj.category.length > 1 || argsObj.limit.length > 1 || argsObj.limit[0] < 1) {
            console.log(warning)
            process.exit(1);
        }

        return argsObj
    },

    query: async function (argsArr) {
        const argsObj = this.getArgs(argsArr)
        const { count, entries } = await this.getData()

        if (!argsObj) {
            // 1. no arguments -> return whole data
            console.log({ count, entries });
            return
        }

        const {category,limit} = argsObj

        if (!category[0]) {
            // 2. only limit(number) argument -> return the first 'n' of data
            console.log(entries.slice(0, limit[0]))
            return
        }

        let results = entries.filter(item => item.Category.toUpperCase() === category[0].toUpperCase())

        if (results.length === 0) {
            // 3. no category(string) match
            console.log(`No results`);
            return
        }

        if (!limit[0]) {
            // 4. only category(string) argument -> return all data in that category
            console.log(results);
            return
        }

        // 5. There are category(string) and limit(number) arguments
        console.log(results.slice(0, limit[0]));
        return
    }
}


apiList.query(process.argv.slice(2))