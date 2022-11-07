import express from "express";
import env from "dotenv";
import routes from "./routes/index.js";

env.config();

const app = express();
const port = process.env.PORT;

app.use(routes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

export default app;
