var ToDo = require('../models/todos.js');

module.exports = function(app) {
    app.get('/api/todos', function(req,res) {
    ToDo.find({}, function(err, data) {
        if(err) {
            res.send(err);
        } else {
            res.json(data);
        }
    })
})
}