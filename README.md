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

-----
# Task 3 - SQL
### Description
Given two tables ‘customer’ and ‘broker’. Write an SQL query to generate a summary of how many customers are under a particular broker. The results should be sorted from high to low number of customers. If brokers have the same number of customers, then sort alphabetically. The result should list the broker name followed by the customer count. The column names are not tested, so use whatever is appropriate.

### Features
- Tested on `PostgreSQL 14` local seesion
- 2 tables are created and named `brokers` and `customers`
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

