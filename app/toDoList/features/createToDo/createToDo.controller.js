angular
    .module('toDoList.createToDo')
    .controller('CreateCtrl', CreateCtrl);

function CreateCtrl($http) {
    var vm = this;

    vm.todos = {
        todo: '',
        completeBy: ''
    };

    function resetView() {
        vm.todos = {
            todo: '',
            completeBy: ''
        }
    };

    vm.addToDo = function(todo, complete) {
        vm.todos.todo = todo;
        vm.todos.completeBy = complete;

        $http({
            method: 'POST',
            url: '/api/todos',
            data: vm.todos
        }).then(function(response) {

        });

        resetView();
    }

};