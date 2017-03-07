angular
    .module('toDoList.createToDo')
    .config(createConfig);

function createConfig($stateprovider) {
    $stateprovider.state({
        name: 'createToDo',
        url: '/create',
        templateUrl: '/toDoList/features/createToDo/createToDo.html',
        controller: 'CreateCtrl',
        controllerAs: 'CreateVM'
    })
}