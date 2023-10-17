const DatabaseQuery = require('./lib/DatabaseQuery');
const QueryBuilder = require('./lib/QueryBuilder');

const question = process.argv[2];
const option = process.argv[3] ?? undefined;

if (option !== '--cached') {
    QueryBuilder.handle(question).then(response => {
        DatabaseQuery.handle(JSON.parse(response))
    })
} else {
    const fs = require('fs');
    const filename = __dirname + '/templates/last_response.txt';
    const response = fs.readFileSync(filename, 'utf8');
    DatabaseQuery.handle(response)
}
