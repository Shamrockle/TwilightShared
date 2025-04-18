import { DataTypes, Model } from "sequelize";
import sequelize from "../config/sequelize";

class RaidRole extends Model {
    declare id: number;
    declare guild: string;
    declare primaryRole: string;
    declare secondaryRole: string;
    
  }

  RaidRole.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    guild: DataTypes.STRING,
    primaryRole: DataTypes.STRING,
    secondaryRole: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'RaidRole',
  });

export default RaidRole; 