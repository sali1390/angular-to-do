angular
    .module('toDoList.listToDos')
    .controller('ListCtrl', ListCtrl);

function ListCtrl($stateParams, $http) {
    var vm = this;

    $http({
        method: 'GET',
        url: '/api/todos',
    }).then(function(response) {
        vm.todos = response

        console.log(vm.todos)
    })
}