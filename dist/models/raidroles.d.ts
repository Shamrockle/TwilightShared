import { Model } from "sequelize";
declare class RaidRole extends Model {
    id: number;
    guild: string;
    primaryRole: string;
    secondaryRole: string;
}
export default RaidRole;
//# sourceMappingURL=raidroles.d.ts.map