var ToDo = require('../models/todos.js');

module.exports = function(app) {
    app.post('/api/todos', function(req,res) {
        var newToDo = new ToDo({
            todo: req.body.todo,
            completeBy: req.body.completeBy
        });

        newToDo.save(function(error, doc) {
            if (error) {
                console.log(error);
            }
            else {
                console.log(doc)
            }
        });
    })
};