import {RifleMuzzleAttachment} from "@/types/muzzle.ts";

export const rifleMuzzleNames = ["Compensator", "Muzzle Brake", "Suppressor", "Ported Compensator"]

export type RifleAttachments = {
    muzzles: RifleMuzzleAttachment[];
};

export type Rifle = {
    name: string;
    image: string;
    attachments: RifleAttachments;
}