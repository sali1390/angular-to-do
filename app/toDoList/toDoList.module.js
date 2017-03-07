//Main App Module
angular
    .module('toDoList', [
        //Global Dependencies
        'ui.router',

        //Features aka States
        'toDoList.listToDos',
        'toDoList.createToDo',
        'toDoList.completedToDo'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    //If the URL does not exist, redirect to /
    $urlRouterProvider.otherwise('/')
}