import { DataTypes, Model } from "sequelize";
import Raid from "./raids";
import sequelize from "../config/sequelize"

class RaidMember extends Model {
	declare id: number;
	declare createdAt: Date;
	declare updatedAt: Date;
	declare raidId: number;
	declare user: string;
	declare nick: string;
	declare char: string;
	declare role: string;
	declare counter: number;
	declare bench: boolean;
	declare away: boolean;
  }

  RaidMember.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	raidId: {
		type: DataTypes.INTEGER,
		references: {
			model: Raid,
			key: 'id',
		},
	},
	user: DataTypes.STRING,
	nick: DataTypes.STRING,
	char: DataTypes.STRING,
	role: DataTypes.STRING,
	counter: DataTypes.BIGINT,
	bench: DataTypes.BOOLEAN,
	away: DataTypes.BOOLEAN,
  }, {
	sequelize,
	modelName: 'RaidMember',
  });

  export default RaidMember;