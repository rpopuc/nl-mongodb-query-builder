# Natural Language MongoDB Query Builder

This Node application receives a natural language query and converts it into a pipeline compatible with the `aggregate` method of a MongoDB database collection. This way, it's possible to retrieve data listings from the database by making requests in natural language, such as:

"What are the 5 most common games (title and quantity) in the collections?"

The application uses the OpenAI API for conversion. Therefore, it's necessary to be registered in OpenAI and have an API key to use the application. You can register and obtain a key at https://platform.openai.com/account/api-keys.

## Description

This project is a Proof of Concept of the use of the OpenAI API for generating queries to MongoDB database.

## Configuration

To configure and run the project:

1. Clone the project files:

    ```
    git clone git@github.com:rpopuc/nl-mongodb-query-builder.git
    cd nl-mongodb-query-builder
    ```

2. Copy the example configuration file:

    ```
    cp .env.example .env
    ```

3. Fill in the `.env` file with the OpenAI API access key obtained at https://platform.openai.com/account/api-keys.

    ```
    OPENAI_API_KEY=<your key>
    ```

4. Run the docker-compose to up all containers:

    ```
    docker-compose up -d
    ```

5. And, finally, install node dependencies:

    ```
    docker-compose exec app npm install
    ```

A MongoDB database will be started with some data already filled in (randomly generated with the ChatGPT). The data is located in `.docker/config/mongo/mongo-init.js`. This data is loaded only on the first execution of MongoDB. To change the data to any other set, please consult the [MongoDB documentation](https://www.mongodb.com/docs/) and the MongoDB image documentation on [DockerHub](https://hub.docker.com/_/mongo).

## Usage

To execute a query in natural language, run the following command:

```
docker-compose exec app node query.js "<natural language query>"
```

Here are some query examples (they can be done in English or Portuguese, perhaps even in other languages, but I haven't tested...):

```
- How many games are registered?
- Which games (title and authors) are registered?
- What are the 5 most common games (title and quantity) in the collections?
- What are the 5 longest matches (date, game title, and duration)?
- What are the most popular festive games in the collections?
- Which war games are the most played?
```

## Customization

It's possible to customize the prompt models for query conversion. The models are in the files [templates/ia-prompt.template](templates/ia-prompt.template) and [templates/user-prompt.template](templates/user-prompt.template). However, changes to these models may affect the application's behavior and cause malfunctions in the data listing generation.

## Disclaimer

This project is a Proof of Concept of the use of the OpenAI API for generating queries to MongoDB database. It's not a final product and there's no control over possible data loss due to malicious query requests. Use it for studies and at your own risk.

## Additional resources

- OpenAI API: https://platform.openai.com/account/api-keys
- MongoDB documentation: https://www.mongodb.com/docs/
- MongoDB image documentation on DockerHub: https://hub.docker.com/_/mongo/

## Trivia

This documentation was also created with AI assistance 🤖 😉.
