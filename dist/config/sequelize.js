"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const fs_1 = __importDefault(require("fs"));
if (fs_1.default.existsSync('.env')) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('dotenv').config();
}
// Check if required environment variables are set
if (!process.env.DB_NAME || !process.env.DB_USER || !('DB_PASS' in process.env)) {
    throw new Error("Missing database environment variables");
}
// Create a new Sequelize instance
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
    dialect: 'mariadb',
    logging: false,
});
exports.default = sequelize;
