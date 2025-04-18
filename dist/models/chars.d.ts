import { InferAttributes, InferCreationAttributes, Model } from "sequelize";
declare class Char extends Model<InferAttributes<Char>, InferCreationAttributes<Char>> {
    user: string;
    char: string;
    tank: string;
    heal: string;
    support: string;
    damage: string;
}
export default Char;
//# sourceMappingURL=chars.d.ts.map