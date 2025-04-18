import { Model } from "sequelize";
declare class Raid extends Model {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    guild: string;
    channel: string;
    message: string;
    raidlead: string;
    content: string;
    tier: number;
    url: string | null;
    start: Date;
    deadline: Date;
    restricted: string | null;
    info: string;
    players: number;
    tank: number;
    heal: number;
    support: number;
    damage: number;
    full: boolean;
}
export default Raid;
//# sourceMappingURL=raids.d.ts.map