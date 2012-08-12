var App = require('app');

App.Router = Em.Router.extend({
    enableLogging: true,
    root: Em.Route.extend({
        index: Em.Route.extend({
            route: '/',
            connectOutlets: function(route){
                console.log('connect');
            }
        })
    })
})