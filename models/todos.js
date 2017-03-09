var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
    todo: {
        type: String
    },
    status: {
        type: Boolean,
        default: false
    },
    completeBy: {
        type: Date,
        default: Date.now
    }
});

var ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDo;