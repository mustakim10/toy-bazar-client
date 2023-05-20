
const Blogs = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold my-5">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
            <p className="text-xl">Refresh tokens allow you to balance your users' access needs with your organization's security practices. Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them.
                <br />
                Here's how they work: <br />

i. Creation: When a user visits a website, the website's server sends a response that includes a set of cookies. These cookies are typically stored in the user's web browser.

ii. Storage: The web browser then stores these cookies on the user's device. Each cookie contains a name-value pair along with additional attributes like expiration date, domain, and path.

iii. Subsequent requests: When the user visits the same website again or navigates to a different page within the same website, the browser sends the stored cookies along with the request. This allows the website to recognize the user and retrieve any stored information related to that user.

iv. Server-side handling: On the server side, the web application can read and process the received cookies. It can use the information stored in the cookies to personalize the user's experience, maintain login sessions, track user behavior, and more.
            </p>
            <h2 className="text-3xl font-bold my-5">Compare SQL and NoSQL databases?</h2>
            <p className="text-xl">1. Data Model:

SQL: SQL databases are based on the relational data model, which organizes data into tables with predefined schemas. Data is stored in rows and columns, and relationships between tables are established through foreign keys.
NoSQL: NoSQL databases support various data models, such as key-value pairs, document-oriented, columnar, and graph databases. They offer more flexibility in terms of data representation, allowing for schema-less or dynamic schemas.

2. Scalability:

SQL: Traditional SQL databases are vertically scalable, which means they can handle increased loads by upgrading hardware resources (e.g., CPU, RAM). Scaling vertically has limitations.
NoSQL: NoSQL databases are designed to be horizontally scalable, making it easier to distribute data across multiple servers and handle high traffic loads by adding more servers to the cluster. They are generally more suitable for large-scale applications and can scale out more easily.

3. Schema:

SQL: SQL databases have a fixed schema, meaning the structure of the database, including tables, columns, and data types, is predefined. Changes to the schema often require altering the database structure.
NoSQL: NoSQL databases are schema-flexible or schema-less, allowing for dynamic or evolving schemas. The absence of a fixed schema makes it easier to handle unstructured or semi-structured data.

4. Query Language:

SQL: SQL databases use the structured query language (SQL) to define and manipulate the data. SQL provides a standardized syntax and powerful querying capabilities, including complex joins, aggregations, and transactions.
NoSQL: NoSQL databases may have their own query languages or APIs specific to their data models. These languages may have a simpler syntax and focus on key-value lookups, document retrieval, or graph traversals. NoSQL databases often prioritize high-speed read and write operations over complex querying capabilities.

5. ACID Compliance:

SQL: SQL databases traditionally adhere to the ACID (Atomicity, Consistency, Isolation, Durability) principles, ensuring reliable and transactional data operations.
NoSQL: NoSQL databases may sacrifice some of the ACID properties in favor of scalability and performance. However, some NoSQL databases do provide support for specific ACID properties, depending on their design and configuration.</p>
<h2 className="text-3xl font-bold my-5">What is express js? What is Nest JS ?</h2>
<p className="text-xl">1. Express.js:

Express.js is a minimalistic and flexible web application framework for Node.js. It provides a simple and straightforward approach to building web servers and APIs.
Express.js focuses on being unopinionated, allowing developers to have more control and freedom in designing the structure and logic of their applications.
It provides a set of essential features and middleware for handling HTTP requests, routing, handling parameters, managing cookies, and serving static files.
Express.js has a large ecosystem with a variety of plugins and extensions available, allowing developers to add additional functionality as needed.
Its lightweight nature makes it well-suited for smaller projects, prototypes, and microservices where simplicity and speed are valued.

2. Nest.js:

Nest.js is a TypeScript-based, opinionated framework for building scalable and maintainable server-side applications. It is built on top of Express.js and utilizes its HTTP server capabilities.
Nest.js follows a modular and structured architectural pattern inspired by Angular, which promotes code organization and separation of concerns.
It provides a powerful dependency injection system, which allows for easy management of dependencies and promotes testability and modular development.
Nest.js supports a range of features, including routing, middleware, request handling, input validation, authentication, and database integration through various modules and decorators.
It offers out-of-the-box support for GraphQL, WebSockets, and microservices architecture using tools like Apollo, Socket.io, and NATS.
Nest.js is suitable for building larger, enterprise-grade applications with complex business logic and extensive codebases. It encourages best practices and maintainability through its structured approach.</p>
<h2 className="text-3xl font-bold my-5">What is MongoDB aggregate and how does it work? </h2>
<p className="text-xl">1. Pipeline Stages:

The aggregate method takes an array of pipeline stages as its argument. Each stage represents a data processing step, such as filtering, grouping, sorting, or transforming the data.
Pipeline stages are applied in the order they are defined in the array. The output of one stage becomes the input for the next stage, forming a chain of operations.

2. Pipeline Operators:

MongoDB provides various pipeline operators that can be used within the stages to define the desired data transformation or aggregation. These operators enable complex data manipulation and analysis.
Some commonly used pipeline operators include:
$match: Filters the documents based on specified conditions.
$group: Groups the documents by a specified field and performs aggregations like counting, summing, averaging, etc.
$sort: Sorts the documents based on specified criteria.
$project: Shapes the documents and includes or excludes specific fields.
$lookup: Performs a left outer join with another collection.
$unwind: Deconstructs an array field into multiple documents.
$limit: Limits the number of documents in the output.

3. Result Output:

The aggregate method returns a cursor object that can be iterated to access the aggregated results.
By default, the cursor returns the documents in batches. You can use methods like toArray() to retrieve all results as an array or forEach() to iterate over the cursor.</p>
        </div>
    );
};

export default Blogs;