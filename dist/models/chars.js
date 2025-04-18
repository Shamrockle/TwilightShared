"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../config/sequelize"));
class Char extends sequelize_1.Model {
}
Char.init({
    user: sequelize_1.DataTypes.STRING,
    char: sequelize_1.DataTypes.STRING,
    tank: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isIn: [['Main', 'Off', 'None']]
        }
    },
    heal: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isIn: [['Main', 'Off', 'None']]
        }
    },
    support: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isIn: [['Main', 'Off', 'None']]
        }
    },
    damage: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isIn: [['Main', 'Off', 'None']]
        }
    },
}, {
    sequelize: sequelize_2.default,
    modelName: 'Char',
});
exports.default = Char;
