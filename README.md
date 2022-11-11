# Task 2 - API - Node.js
### Description
Create a ﬁle which when executed from the command line, prints the values based on 
the arguments passed.
API Endpoint: https://api.publicapis.org/entries

### How to run
- `node main.js category limit`
    e.g. run `node main.js Weather 5`

### Features
- `category` parameter is case insensitives
- Results are sorted alphabetically by value of "API" in descending order


### Instructions
- Write code inside the ﬁle which fetches data from the API and prints the values 
of ‘API’ decreasing alphabetically
- The ﬁle accepts two arguments ‘category’ and ‘limit’
- Print the results matching the ‘category’ and ‘limit’ is the number of results to 
print eg: php ﬁle.php Weather 5
- If no records matches the category, print ‘No results
