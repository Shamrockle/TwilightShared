"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../config/sequelize"));
class Template extends sequelize_1.Model {
}
Template.init({
    guild: sequelize_1.DataTypes.STRING || null,
    name: sequelize_1.DataTypes.STRING,
    content: sequelize_1.DataTypes.STRING,
    tier: sequelize_1.DataTypes.INTEGER,
    info: sequelize_1.DataTypes.STRING || null,
    tank: sequelize_1.DataTypes.INTEGER,
    heal: sequelize_1.DataTypes.INTEGER,
    support: sequelize_1.DataTypes.INTEGER,
    damage: sequelize_1.DataTypes.INTEGER,
}, {
    sequelize: sequelize_2.default,
    modelName: 'Template',
});
exports.default = Template;
