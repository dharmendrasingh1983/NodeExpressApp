const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const enployeeModel = require('./models/employeeModel');
const employeeSchema = new Schema(enployeeModel);
var employee = mongoose.model('Employee', employeeSchema);
const mongoDb = 'mongodb://127.0.0.1:27017/EmployeeS';
const dbOptions = {
    useNewUrlParser: true
};
mongoose.connect(mongoDb, dbOptions, (mangoError) => {
    console.log(mangoError)
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = {
    insert: function () {
        return new Promise(resolve => {
            var newEmployee = new employee({
                id: 1,
                name: "DKS",
                age: 32,
                mobile: 1235455
            });
            newEmployee.save(function (error) {
                if (error) resolve(false);
                // saved!
                resolve(true)
            });
        });

    },

    update: function () {
        return new Promise(resolve => {
            /*  employee.findOneAndUpdate({
                  id: 1
              }, {
                  name: "Dharmendra"
              }, function (error) {
                  let ereor = error;
              }); */

            employee.updateMany({
                id: 1
            }, {
                name: "Dharmendra kumar singh"
            }, (error) => {
                if (error) {
                    resolve(false);
                }
                console.log(error);
                resolve(true);
            });
        });

    },
    delete: function () {
        return new Promise(resolve => {
            employee.remove({
                id: 1
            }, function (err) {
                if (error) {
                    console.log(err);
                    resolve(false);
                }
                resolve(true);
                //Remove all the documents that match!
            });

        });
        // Write exec directily execute query 
    },

    select: function () {
        return new Promise(resolve => {
            employee.find((err, x) => {
                if (err) resolve([]);
                resolve(x);
            });
        });
    }

}