import express from 'express';
import fs from 'fs';

var app = express();

import apiRoutes from './routes/api.js';

apiRoutes(app);

app.use(express.static('./app/'));

app.use(express.static('./'));

app.use('/*', (req, res, next) => {
  res.json({error: 'Unknown path'});
});

app.use('/*', express.static('./app/index.html'));

app.listen(3002, () => {
  console.log('Server running!');
});
