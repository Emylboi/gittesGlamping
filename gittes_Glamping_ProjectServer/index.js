import * as dotenv from "dotenv";
dotenv.config({ path: `.env.local`, override: true });

import server from "./lib/server.js";

const app = {};

app.init = () => {
  server.run();
};

app.init();
