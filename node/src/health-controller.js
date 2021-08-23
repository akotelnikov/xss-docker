import { checkConnection } from "./mongodb.js";

export const healthController = async (_, res) => 
  checkConnection()
    .then((data) => {
      res.write('Connected successfully to db');
      res.end();
    })
    .catch((err) => {
      res.statusCode = 503;
      res.write(`Something went wrong :(, error: ${JSON.stringify(err)}`);
      res.end();
    });
