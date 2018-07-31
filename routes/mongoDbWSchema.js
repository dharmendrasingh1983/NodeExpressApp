const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const enployeeModel = require('./models/employeeModel');
const employeeSchema = new Schema(enployeeModel);
var employee = mongoose.model('Employee', employeeSchema);
const mongoDb = 'mongodb://127.0.0.1/EmployeeS';
mongoose.connect(mongoDb);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = {
    insert: function () {
        var a = new employee({
            id: 1,
            name: "DKS",
            age: 32,
            mobile: 1235455
        });
        a.save(function (error) {
            if (err) return handleError(err);
            // saved!
        });
    }

}