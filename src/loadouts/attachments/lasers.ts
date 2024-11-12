import {Attachment} from "@/types/attachments";
import {LaserNames} from "@/types/attachments/laser.ts";

export const lasers: Attachment<LaserNames>[] = [
    {
        name: "Fast Motion Laser",
        image: "/attachments/lasers/fast_motion_laser.png",
    },
    {
        name: "Steady Aim Laser",
        image: "/attachments/lasers/steady_aim_laser.png",
    },
    {
        name: "Strelok Laser",
        image: "/attachments/lasers/strelok_laser.png",
    },
    {
        name: "Tactical Laser",
        image: "/attachments/lasers/tactical_laser.png",
    },
    {
        name: "Target Laser",
        image: "/attachments/lasers/target_laser.png",
    }
]