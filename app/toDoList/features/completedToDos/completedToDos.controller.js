angular
    .module('toDoList.completedToDos')
    .controller('CompletedCtrl', CompletedCtrl);

function CompletedCtrl($http) {
    var vm = this;

    $http({
        method: 'GET',
        url: ,
    }).then(function(response) {

    })
}