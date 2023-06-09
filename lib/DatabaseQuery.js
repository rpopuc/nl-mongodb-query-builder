const MongoClient = require('mongodb').MongoClient
const fs = require('fs')

class DatabaseQuery {
    static handle(queryText) {
        const url = 'mongodb://database:27017'
        const dbName = 'test'

        MongoClient.connect(url).then(client => {
            const db = client.db(dbName)
            const queryDefinition = JSON.parse(queryText.match(/.*?\<\!--\s*(.*?)\s*--\!\>/msi)[1].trim())
            const meta = queryDefinition.meta
            const collection = db.collection(meta.collection)

            //console.log(queryDefinition.query)

            collection[meta.type](queryDefinition.query).toArray().then(records => {
                fs.writeFileSync(
                    __dirname + '/../templates/last_records.json',
                    JSON.stringify(records, null, 2)
                )
                return records
            }).then(records => {
                records.forEach(record => {
                    console.log('------------------------------');
                    meta.columns.forEach(column => {
                        let value = record[column.field]
                        if (value == undefined) {
                            value = record[column.title]
                        }
                        console.log(column.title + ': ' + value);
                    })
                })
                console.log('------------------------------')
                client.close()
            }).catch(error => {
                console.log(error)
            });
        }).catch(error => {
            console.log(error)
        })
    }
}

module.exports = DatabaseQuery;