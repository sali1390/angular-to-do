angular
    .module('toDoList.listToDos')
    .controller('ListCtrl', ListCtrl);

function ListCtrl($http) {
    var vm = this;

    $http({
        method: 'GET',
        url: ,
    }).then(function(response) {

    })
}