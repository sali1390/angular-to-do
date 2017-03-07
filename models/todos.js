var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
    todo: {
        type: String
    },
    status: {
        type: String
    },
    completeBy: {
        type: String
    }
});

var ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDo;