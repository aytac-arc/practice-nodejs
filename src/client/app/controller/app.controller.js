/**
 * The one and only controller used in this app.
 */

class AppController {
    static get $inject() {
      return ['App'];
    }

    constructor(App) {
      this.App = App;
    }

    $onInit() {
      this.getMenu();
    }

    getMenu() {
      // this.menu = [{test: 'test'}, {test2: 'test2'}];
      console.log('start getMenu');
      const success = (response) => {
        this.menu = angular.copy(response.menu);
        console.log('in getMenu');
      };

      const fail = (error) => error;

      this.App.getMenu()
        .then(success, fail);
        console.log('end getMenu');
    }

}

angular.module('app').controller('AppController', AppController);
