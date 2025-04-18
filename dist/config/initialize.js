"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDatabase = initializeDatabase;
const sequelize_1 = __importDefault(require("./sequelize"));
/**
 * Initializes and syncs all models with the database.
 * @param options Optional Sequelize sync options.
 */
async function initializeDatabase(options) {
    try {
        await sequelize_1.default.authenticate(); // Ensure the connection is valid
        await sequelize_1.default.sync(options); // Sync all models
        console.log('Database synchronized successfully.');
    }
    catch (error) {
        console.error('Error synchronizing the database:', error);
        throw error;
    }
}
