import AppController from './controller/app.controller.js';
import App from './service/app.service.js';

const AppModule =
  angular
    .module('app', [
      'ui.router',
    ])
    .factory('App', App)
    .controller('AppController', AppController)
    .name;

export default AppModule;
