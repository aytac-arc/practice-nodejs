/**
 * The one and only controller used in this app.
 */

class Menu {

    /*@ngInject*/
    constructor($http) {
      this.$http = $http;

      this.$inject = ['$http'];
    }

    async getMenu() {
      const url = '/api/v1/menu';

      var response = await this.$http.get(url);

      return response.data;
    }

}

export default Menu;
