class MenuController {
    static get $inject() {
      return ['$scope', 'Menu'];
    }

    constructor($scope, Menu) {
      this.$scope = $scope;
      this.Menu = Menu;
    }

    $onInit() {
      this.getMenu();
    }

    getMenu() {
      const success = (response) => {
        this.menu = angular.copy(response.menu);
        this.$scope.$apply();
      };

      const fail = (error) => error;

      this.Menu.getMenu()
        .then(success, fail);
    }

}

export default MenuController;
