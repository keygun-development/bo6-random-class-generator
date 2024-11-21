import {Attachment} from "@/types";

export type LaserNames =
    | "Fast Motion Laser"
    | "Steady Aim Laser"
    | "Strelok Laser"
    | "Tactical Laser"
    | "Target Laser";

export type RifleLaserAttachment = Attachment<LaserNames>