import {Attachment} from "@/types/attachments";
import {MuzzleNames} from "@/types/muzzle.ts";

export const muzzles: Attachment<MuzzleNames>[] = [
    { name: "Compensator", image: "/attachments/muzzles/compensator.png" },
    { name: "Suppressor", image: "/attachments/muzzles/suppressor.png" },
    { name: "Muzzle Brake", image: "/attachments/muzzles/muzzle_brake.png" },
    { name: "Ported Compensator", image: "/attachments/muzzles/ported_compensator.png" },
    { name: "Full Choke", image: "/attachments/muzzles/full_choke.png" },
    { name: "Modified Choke", image: "/attachments/muzzles/modified_choke.png" }
];