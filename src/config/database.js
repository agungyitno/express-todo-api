const config = {
  host: process.env.DB_HOST ?? "localhost",
  user: process.env.DB_USER ?? "root",
  password: process.env.DB_PASS ?? "",
  database: process.env.DB_DATABASE ?? "todo",
  dialect: process.env.DB_DIALECT ?? "mysql",
};

export default config;
