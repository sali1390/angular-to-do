//Main App Module
angular
    .module('toDoList', [
        //Global Dependencies
        'ui.router',

        //Features/States

    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    //If the URL does not exist, redirect to /
    $urlRouterProvider.otherwise('/')
}