import { Model } from "sequelize";
declare class RaidMember extends Model {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    raidId: number;
    user: string;
    nick: string;
    char: string;
    role: string;
    counter: number;
    bench: boolean;
    away: boolean;
}
export default RaidMember;
//# sourceMappingURL=raidmembers.d.ts.map