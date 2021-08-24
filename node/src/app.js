import http from 'http';
import url from 'url';
import { healthController } from './health-controller.js';

const {
  PORT = 3000
} = process.env;


const routes = {
  '/health': healthController
};

http
  .createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    if (routes[path]) {
      routes[path](req, res);
      return;
    }

    res.statusCode = 404;
    res.write('404');
    res.end();
  })
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  });
