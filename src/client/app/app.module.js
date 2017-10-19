import AppController from './controller/app.controller.js';
import App from './service/app.service.js';

angular
  .module('app', [
    'angular',
    'angular-ui-router',
  ])
  .factory('App', App)
  .controller('AppController', AppController);
