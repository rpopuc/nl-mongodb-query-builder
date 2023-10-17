const MongoClient = require('mongodb').MongoClient
const fs = require('fs')

class DatabaseQuery {
    static handle(queryDefinition) {
        const url = 'mongodb://database:27017'
        const dbName = 'test'

        MongoClient.connect(url).then(client => {
            const meta = queryDefinition.meta

            const db = client.db(dbName)
            const collection = db.collection(meta.collection)

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
            console.log('Error connecting MongoDB', error)
        })
    }
}

module.exports = DatabaseQuery;