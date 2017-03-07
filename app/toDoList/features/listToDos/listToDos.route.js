angular
    .module('toDoList.listToDos')
    .config(createConfig);

function createConfig($stateprovider) {
    $stateprovider.state({
        name: 'listToDos',
        url: '/list',
        templateUrl: '/toDoList/features/listToDos/listToDos.html',
        controller: 'ListCtrl',
        controllerAs: 'ListVM'
    })
}