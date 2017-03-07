angular
    .module('toDoList.createToDo')
    .config(createConfig);

function createConfig($stateProvider) {
    $stateProvider.state({
        name: 'createToDo',
        url: '/create',
        templateUrl: '/toDoList/features/createToDo/createToDo.html',
        controller: 'CreateCtrl',
        controllerAs: 'CreateVM'
    })
}