import { Sequelize } from "sequelize";
import fs from 'fs';

if (fs.existsSync('.env')) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('dotenv').config();
}
// Check if required environment variables are set
if (!process.env.DB_NAME || !process.env.DB_USER || !('DB_PASS' in process.env)) {
    throw new Error("Missing database environment variables");
}
// Create a new Sequelize instance
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
	dialect: 'mariadb',
	logging: false,
});

export default sequelize;