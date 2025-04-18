import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize";

class Raid extends Model {
	declare id: number;
	declare createdAt: Date;
	declare updatedAt: Date;
	declare guild: string;
	declare channel: string;
	declare message: string;
	declare raidlead: string;
	declare content: string;
	declare tier: number;
	declare url: string | null;
	declare start: Date;
	declare deadline: Date;
	declare restricted: string | null;
	declare info: string;
	declare players: number;
	declare tank: number;
	declare heal: number;
	declare support: number;
	declare damage: number;
	declare full: boolean;
  }

  Raid.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	  },
	guild: DataTypes.STRING,
	channel: DataTypes.STRING,
	message: DataTypes.STRING,
	raidlead: DataTypes.STRING,
	content: DataTypes.STRING,	
	tier: DataTypes.INTEGER,
	url: DataTypes.STRING || null,
	start: DataTypes.DATE,
	deadline: DataTypes.DATE,
	restricted: DataTypes.STRING || null,
	info: DataTypes.TEXT,
	players: DataTypes.INTEGER,
	tank: DataTypes.INTEGER,
	heal: DataTypes.INTEGER,
	support: DataTypes.INTEGER,
	damage: DataTypes.INTEGER,
	full: DataTypes.BOOLEAN
  }, {
	sequelize,
	modelName: 'Raid',
  });

export default Raid; 