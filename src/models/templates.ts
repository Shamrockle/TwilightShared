import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize";

class Template extends Model {
	declare guild: string | null;
	declare name: string;
	declare content: string;
	declare tier: number;
	declare info: string | null;
	declare tank: number;
	declare heal: number;
	declare support: number;
	declare damage: number;
  }

  Template.init({
	guild: DataTypes.STRING || null,
	name: DataTypes.STRING,
	content: DataTypes.STRING,
	tier: DataTypes.INTEGER,
	info: DataTypes.STRING || null,
	tank: DataTypes.INTEGER,
	heal: DataTypes.INTEGER,
	support: DataTypes.INTEGER,
	damage: DataTypes.INTEGER,
  }, {
	sequelize,
	modelName: 'Template',
  });

export default Template;