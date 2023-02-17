import app from "./index.js";

const startServer = async (port: number) =>
  new Promise((resolve) => {
    const server = app.listen(port);
    resolve(server);
  });

export default startServer;
