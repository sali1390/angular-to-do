angular
    .module('toDoList.completedToDos')
    .config(completedConfig);

function completedConfig($stateprovider) {
    $stateprovider.state({
        name: 'completedToDos',
        url: '/completed',
        templateUrl: '/toDoList/features/completedToDos/completedToDos.html',
        controller: 'CompletedCtrl',
        controllerAs: 'CompletedVM'
    })
}