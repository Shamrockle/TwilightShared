import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize";

class Char extends Model{
	declare user: string;
	declare char: string;
	declare tank: string;
	declare heal: string;
	declare support: string;
	declare damage: string;
  }

  Char.init({
	user: DataTypes.STRING,
	char: DataTypes.STRING,
	tank: {
		type: DataTypes.STRING,
		validate: {
			isIn: [['Main', 'Off', 'None']]
		}
	},
	heal: {
		type: DataTypes.STRING,
		validate: {
			isIn: [['Main', 'Off', 'None']]
		}
	},
	support: {
		type: DataTypes.STRING,
		validate: {
			isIn: [['Main', 'Off', 'None']]
		}
	},
	damage: {
		type: DataTypes.STRING,
		validate: {
			isIn: [['Main', 'Off', 'None']]
		}
	},
	
  }, {
	sequelize,
	modelName: 'Char',
  });

export default Char;