var ToDo = require('../models/todos.js');

module.exports = function(app) {
    app.get('/api/todos', function(req,res) {
        ToDo.findByIdAndUpdate(req.body._id, {status: true}, function(err, data) {
            if(err) {
                res.send(err);
            } else {
                res.send(data);
            }
        })
    })
};