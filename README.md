# Task 2 - API - Node.js
### Description
Create a ﬁle which when executed from the command line, prints the values based on 
the arguments passed.
API Endpoint: https://api.publicapis.org/entries

### Features
- Use `axios` package to fetch data
- Assign arguments to an `Object` according to arguments type, which means arguments order is insensitive. For example, you can get the same results by running `node main.js books 2` or `node main.js 2 books`
- Arguments input check. If you enter a negative number for `limit`, it will return a warning
- There are 4 modes:
    1. No arguments. It will return whole data sorted by `API` decreasing alphabetically.    
    `node main.js`
    2. One `number` type argument. It will return the first `number` of data.     
    `node main.js 5`
    3. One `string` type argument. It will return data with that `category`.    
    `node main.js books` 
    4. Two arguments. It will return `limit` number of data with that `category`.     
    `node main.js books 5` or `node main.js 5 books` 
### How to run
- `node main.js category limit`
    e.g.  `node main.js Weather 5` or `node main.js weather 5` (arguments order is insensitive)



### Instructions
- Write code inside the ﬁle which fetches data from the API and prints the values 
of ‘API’ decreasing alphabetically
- The ﬁle accepts two arguments ‘category’ and ‘limit’
- Print the results matching the ‘category’ and ‘limit’ is the number of results to 
print eg: php ﬁle.php Weather 5
- If no records matches the category, print ‘No results

-----
# Task 3 - SQL
### Description
Given two tables ‘customer’ and ‘broker’. Write an SQL query to generate a summary of how many customers are under a particular broker. The results should be sorted from high to low number of customers. If brokers have the same number of customers, then sort alphabetically. The result should list the broker name followed by the customer count. The column names are not tested, so use whatever is appropriate.

### Features
- Create and test on PostgreSQL 14 Local session
- Two tables are created and named `brokers` and `customers`. These two tables are linked by `broker_id`
- The `Query` is shown below
    ```
    SELECT 
        brokers.name AS broker_name,
        COUNT (customers.customer_id) AS customer_count
    FROM brokers
        INNER JOIN customers USING(broker_id)
    GROUP BY broker_id
    ORDER BY COUNT(customers.customer_id) DESC, brokers.name;
    ```

