"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../config/sequelize"));
class RaidRole extends sequelize_1.Model {
}
RaidRole.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    guild: sequelize_1.DataTypes.STRING,
    primaryRole: sequelize_1.DataTypes.STRING,
    secondaryRole: sequelize_1.DataTypes.STRING,
}, {
    sequelize: sequelize_2.default,
    modelName: 'RaidRole',
});
exports.default = RaidRole;
