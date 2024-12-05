import {RifleMuzzleAttachment} from "@/types/attachments/muzzle.ts";
import {RifleOpticAttachment} from "@/types/attachments/optic.ts";
import {RifleBarrelAttachment} from "@/types/attachments/barrel.ts";
import {RifleUnderBarrelAttachment} from "@/types/attachments/underbarrel.ts";
import {RifleMagazineAttachment} from "@/types/attachments/magazine.ts";
import {RifleRearGripAttachment} from "@/types/attachments/reargrip.ts";
import {RifleStockAttachment} from "@/types/attachments/stock.ts";
import {RifleLaserAttachment} from "@/types/attachments/laser.ts";
import {RifleFireModAttachments, RifleFireModNames} from "@/types/attachments/firemods.ts";

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

export const rifleBarrelNames = [
    "CHF Barrel",
    "Gain-Twist Barrel",
    "Long Barrel",
    "Reinforced Barrel",
    "Short Barrel"
]

export const rifleUnderBarrelNames = [
    "Launcher - Drill Charge",
    "Launcher - High Explosive",
    "Launcher - Smoke",
    "Launcher - Standard",
    "Lightweight Foregrip",
    "Marksman Foregrip",
    "Precision Foregrip",
    "Ranger Foregrip",
    "Vertical Foregrip"
]

export const rifleMagazineNames = [
    "Extended Mag I",
    "Extended Mag II",
    "Extended Mag III",
    "Fast Mag I",
    "Fast Mag II",
    "Flip Mag"
]

export const rifleRearGripNames = [
    "Assault Grip",
    "Commando Grip",
    "CQB Grip",
    "Ergonomic Grip"
]

export const rifleStockNames = [
    "Balanced Stock",
    "Combat Stock",
    "Heavy Stock",
    "Infiltrator Stock",
    "Light Stock"
]

export const rifleLaserNames = [
    "Fast Motion Laser",
    "Steady Aim Laser",
    "Strelok Laser",
    "Tactical Laser",
    "Target Laser"
]

export const rifleFireModNames = [
    "5.56 NATO FMJ",
    "5.56 NATO Overpressured",
    "Rapid Fire",
    "Recoil Springs"
]

export type GenericRifleAttachments = {
    muzzles: RifleMuzzleAttachment[];
    optics: RifleOpticAttachment[];
    barrels: RifleBarrelAttachment[];
    underbarrels: RifleUnderBarrelAttachment[];
    magazines: RifleMagazineAttachment[];
    rearGrips: RifleRearGripAttachment[];
    stocks: RifleStockAttachment[];
    lasers: RifleLaserAttachment[];
    firemods: RifleFireModAttachments<RifleFireModNames>[];
};

export type GenericRifle<A = GenericRifleAttachments> = {
    name: string;
    image: string;
    attachments: A;
};