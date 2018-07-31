var MongoClient = require('mongodb').MongoClient;
const {
    Observable,
    Subject,
    ReplaySubject,
    from,
    of ,
    range
} = require('rxjs');
const {
    map,
    filter,
    switchMap
} = require('rxjs/operators');
var url = 'mongodb://localhost:27017';
const dbName = "EmployeeDB";
//Enum
var processEnum = {
    select: 1,
    insert: 2,
    update: 3,
    delete: 4
};

const dbOptions = {
    useNewUrlParser: true
};

module.exports = {
    connect: function () {
        return new Promise(resolved => {
            try {
                MongoClient.connect(url, dbOptions, function (err, client) {
                    if (err === null) {
                        console.log("Connected");
                        let db = client.db(dbName);
                        client.close();
                        resolved(true);
                    } else {
                        console.log(err);
                        resolved(false);
                    }

                });
            } catch (e) {
                console.log(e.message);
                resolved(false);
            }
        });
    },
    select: function () {
        return processMongod("Employee", processEnum.select);
    },
    insert: function (employee) {
        return processMongod("Employee", processEnum.insert, employee);
    },

    update: function (employee) {
        return processMongod("Employee", processEnum.update, employee);
    },

    delete: function (employee) {
        return processMongod("Employee", processEnum.delete, employee);
    }

}


function processMongod(tableName, processName, data) {
    return new Promise(resolved => {
        MongoClient.connect(url, dbOptions, function (err, client) {
            if (err === null) {
                try {
                    const db = client.db(dbName);
                    const collection = db.collection(tableName);
                    if (processName === processEnum.insert && data !== undefined) {
                        collection.insertOne(data);

                        resolved(true);
                    } else if (processName === processEnum.select) {
                        collection.find().toArray(function (error, items) {
                            resolved(items);
                        });

                    } else if (processName == processEnum.update && data !== undefined) {
                        collection.updateOne({
                            "Employeeid": data.Employeeid
                        }, {
                            $set: {
                                "EmployeeName": data.EmployeeName
                            }
                        });
                        resolved(true);
                    } else if (processName === processEnum.delete && data !== undefined) {
                        db.collection('Employee').deleteOne({
                            "EmployeeName": data.Employeeid
                        });
                        resolved(true);
                    }

                } catch (e) {
                    resolved(false);
                }
            }
            client.close();
        });
    });
}