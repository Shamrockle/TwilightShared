"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../config/sequelize"));
class Raid extends sequelize_1.Model {
}
Raid.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    guild: sequelize_1.DataTypes.STRING,
    channel: sequelize_1.DataTypes.STRING,
    message: sequelize_1.DataTypes.STRING,
    raidlead: sequelize_1.DataTypes.STRING,
    content: sequelize_1.DataTypes.STRING,
    tier: sequelize_1.DataTypes.INTEGER,
    url: sequelize_1.DataTypes.STRING || null,
    start: sequelize_1.DataTypes.DATE,
    deadline: sequelize_1.DataTypes.DATE,
    restricted: sequelize_1.DataTypes.STRING || null,
    info: sequelize_1.DataTypes.TEXT,
    players: sequelize_1.DataTypes.INTEGER,
    tank: sequelize_1.DataTypes.INTEGER,
    heal: sequelize_1.DataTypes.INTEGER,
    support: sequelize_1.DataTypes.INTEGER,
    damage: sequelize_1.DataTypes.INTEGER,
    full: sequelize_1.DataTypes.BOOLEAN
}, {
    sequelize: sequelize_2.default,
    modelName: 'Raid',
});
exports.default = Raid;
