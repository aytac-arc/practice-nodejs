/**
 * The one and only controller used in this app.
 */

class App {

    /*@ngInject*/
    constructor($http) {
      this.$http = $http;

      this.$inject = ['$http'];
    }

    async getMenu() {
      console.log('start getMenu');
      const url = '/api/v1/menu';

      var response = await this.$http.get(url);

      console.log('end getMenu');
      return response.data;
    }

}

export default App;
