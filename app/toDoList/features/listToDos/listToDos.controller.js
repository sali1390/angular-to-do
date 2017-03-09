angular
    .module('toDoList.listToDos')
    .controller('ListCtrl', ListCtrl);

function ListCtrl($stateParams, $http) {
    var vm = this;

    vm.todos = [];

    $http({
        method: 'GET',
        url: '/api/todos',
    }).then(function(response) {
        //for (i = 0; i < response.data; i++){
        //    vm.todos.push(response.data[i].todo)
        //
        //    console.log(vm.todos)
        //}

        response.data.forEach(function(todo){
            vm.todos.push(todo);
        })

        console.log(vm.todos)
    });


}