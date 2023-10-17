const DatabaseQuery = require('./lib/DatabaseQuery');
const QueryBuilder = require('./lib/QueryBuilderByFunctionCall');

const question = process.argv[2];
const option = process.argv[3] ?? undefined;

if (option !== '--cached') {
    QueryBuilder.handle(question).then(response => {
        const queryResponse = JSON.parse(response)
        const query = JSON.parse(
            queryResponse.query
                .replace(/([{,])\s*([^:{\s,]+)\s*:/g, '$1 "$2":')
                .replace(/:\s*'([^']*)'/g, ': "$1"')
                .replace(/""/g, '"')
        )

        const definition = {
            query,
            meta: {
                collection: queryResponse.collection,
                type: "aggregate",
                columns: queryResponse.titles
            }
        }
        console.log(definition)
        DatabaseQuery.handle(definition)
    })
} else {
    const fs = require('fs');
    const filename = __dirname + '/templates/last_response.txt';
    const response = fs.readFileSync(filename, 'utf8');
    DatabaseQuery.handle(response)
}
