import http from 'http';
import url from 'url';
import { healthController } from './health-controller.js';

const port = 3000;

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
  .listen(port, () => {
    console.log(`Server running on port ${port}`)
  });
