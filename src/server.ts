import express from "express";
import { sequelize } from "./database";
import { adminJS, adminJsRouter } from "./adminjs";

const app = express();
app.use(express.static("public"));
//app.use(caminho, rotas)
app.use(adminJS.options.rootPath, adminJsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  sequelize.authenticate().then(() => {
    console.log(`DB connection established`);
  });
  console.log(`Server started successfuly at port: ${PORT}`);
});
