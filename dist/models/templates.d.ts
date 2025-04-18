import { Model } from "sequelize";
declare class Template extends Model {
    guild: string | null;
    name: string;
    content: string;
    tier: number;
    info: string | null;
    tank: number;
    heal: number;
    support: number;
    damage: number;
}
export default Template;
//# sourceMappingURL=templates.d.ts.map