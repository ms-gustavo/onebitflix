import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "onebitflix_dev",
  username: "gugario",
  password: "164852",
  define: {
    underscored: true,
  },
});
