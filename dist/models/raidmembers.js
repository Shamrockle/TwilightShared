"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const raids_1 = __importDefault(require("./raids"));
const sequelize_2 = __importDefault(require("../config/sequelize"));
class RaidMember extends sequelize_1.Model {
}
RaidMember.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    raidId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: raids_1.default,
            key: 'id',
        },
    },
    user: sequelize_1.DataTypes.STRING,
    nick: sequelize_1.DataTypes.STRING,
    char: sequelize_1.DataTypes.STRING,
    role: sequelize_1.DataTypes.STRING,
    counter: sequelize_1.DataTypes.BIGINT,
    bench: sequelize_1.DataTypes.BOOLEAN,
    away: sequelize_1.DataTypes.BOOLEAN,
}, {
    sequelize: sequelize_2.default,
    modelName: 'RaidMember',
});
exports.default = RaidMember;
