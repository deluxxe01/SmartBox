import { Sequelize } from "sequelize";

const DbConection = new Sequelize({
    host:"localhost",
    password:"senai",
    username:"postgres",
    database:"smartbox",
    dialect:"postgres",
    port:5432
})

export default DbConection