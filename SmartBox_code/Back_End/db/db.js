import { Sequelize } from "sequelize";

const DbConection = new Sequelize({
    host:"localhost",
    password:"1234",
    username:"postgres",
    database:"smartbox",
    dialect:"postgres",
    port:5432
})

export default DbConection