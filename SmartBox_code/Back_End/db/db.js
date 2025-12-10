import { Sequelize } from "sequelize";

const DbConection = new Sequelize({
    host:"localhost",
    password:"180607",
    username:"postgres",
    database:"smartbox",
    dialect:"postgres",
    port:5432
})

export default DbConection