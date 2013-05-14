/*global Ember:true, App:true */

App = Ember.Application.create();

(function (App) {
    'use strict';
    
    App.Router.map(function () {
        // put your routes here
    });

    App.IndexRoute = Ember.Route.extend({
        model: function () {
            return ['red', 'yellow', 'blue'];
        }
    });

})(App);