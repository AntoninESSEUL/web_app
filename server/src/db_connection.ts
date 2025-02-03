import { Sequelize } from "sequelize-typescript";
import { Role } from "./models/Roles";

const sequelize = new Sequelize({
  database: "mydb",
  dialect: "mysql",
  username: "user",
  password: "uimm",
  storage: ":memory:",
  models: [Role],
});
sequelize.addModels([Role]);

export default sequelize;
