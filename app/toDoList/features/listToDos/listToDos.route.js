angular
    .module('toDoList.listToDos')
    .config(createConfig);

function createConfig($stateProvider) {
    $stateProvider.state({
        name: 'listToDos',
        url: '/',
        templateUrl: '/toDoList/features/listToDos/listToDos.html',
        controller: 'ListCtrl',
        controllerAs: 'ListVM'
    })
}