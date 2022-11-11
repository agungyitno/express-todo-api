import express from "express";
import env from "dotenv";
import cors from "cors";
import routes from "./routes/index.js";

env.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

export default app;
