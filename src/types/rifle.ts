import {RifleMuzzleAttachment} from "@/types/attachments/muzzle.ts";
import {RifleOpticAttachment} from "@/types/attachments/optic.ts";

export const rifleMuzzleNames = ["Compensator", "Muzzle Brake", "Suppressor", "Ported Compensator"];
export const rifleOpticNames = [
    "Remuda Mini Reflex",
    "Otero Micro Dot",
    "Kepler Microflex",
    "Merlin Mini",
    "PrismaTech Reflex",
    "Volzhskiy Reflex",
    "Merlin Reflex",
    "Redwell Reflex",
    "Dobrych MF Reflex",
    "Accu-Spot Reflex",
    "K&S Red Dot",
    "Kepler Red Dot",
    "Otero Red Dot",
    "OMS '92 Holo",
    "Pinpoint Holoscout",
    "Accu-Spot Ultra Holo",
    "Jason Armory 2x",
    "Willis 3x",
    "PrismaTech 4x",
    "Dobrych 4x",
    "Pinpoint Hybrid",
    "PrismaPoint Hybrid",
    "R&K Multizoom",
    "Blandwell 7x Scope",
    "Otero Thermal 2x"
];

export type RifleAttachments = {
    muzzles: RifleMuzzleAttachment[];
    optics: RifleOpticAttachment[];
};

export type Rifle = {
    name: string;
    image: string;
    attachments: RifleAttachments;
};