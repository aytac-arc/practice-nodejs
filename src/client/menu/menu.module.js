import MenuController from './controller/menu.controller.js';
import Menu from './service/menu.js';

const MenuModule =
  angular
    .module('app', [
      'ui.router',
    ])
    .factory({
      Menu
    })
    .controller({
      MenuController
    })
    .name;

export default MenuModule;
