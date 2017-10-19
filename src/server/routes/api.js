import menuApi from './menu-api.js';
import apisJson from '../data/apis.json'

export default (app) => {

  menuApi(app);

  app.get('/api/v1/', (req, res) => {
    res.json(apisJson);
  });

};
