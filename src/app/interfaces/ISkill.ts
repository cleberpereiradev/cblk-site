import { Level } from "../enums/Level";

export interface ISkill {
    id?: number;
    name: string;
    skillImgUrl: string;
    description: string;
    level: Level;
}