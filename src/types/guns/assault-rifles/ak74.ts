import {RifleBarrelAttachment, RifleBarrelNames} from "@/types/attachments/barrel.ts";
import {RifleMuzzleAttachment} from "@/types/attachments/muzzle.ts";
import {RifleOpticAttachment} from "@/types/attachments/optic.ts";
import {RifleUnderBarrelAttachment} from "@/types/attachments/underbarrel.ts";
import {RifleMagazineAttachment} from "@/types/attachments/magazine.ts";
import {RearGripNames, RifleRearGripAttachment} from "@/types/attachments/reargrip.ts";
import {RifleStockAttachment} from "@/types/attachments/stock.ts";
import {LaserNames, RifleLaserAttachment} from "@/types/attachments/laser.ts";
import {FireModNames, RifleFireModAttachments} from "@/types/attachments/firemods.ts";

export type AKBarrelNames = Extract<
    RifleBarrelNames,
    "CHF Barrel" | "Long Barrel" | "Reinforced Barrel" | "Short Barrel"
>;

export type AKGripNames = Extract<RearGripNames, "Commando Grip"
    | "CQB Grip"
    | "Ergonomic Grip"
    | "Quickdraw Grip"
>

export type AKLaserNames = Extract<LaserNames, "Fast Motion Laser"
    | "Strelok Laser"
    | "Tactical Laser"
    | "Target Laser"
>

export type AKFireModNames = Extract<FireModNames, "5.45x39mm FMJ"
    | "5.45x39mm Overpressured"
    | "Rapid Fire"
    | "Recoil Springs"
>

export type AKAttachments = {
    muzzles: RifleMuzzleAttachment[];
    optics: RifleOpticAttachment[];
    barrels: RifleBarrelAttachment<AKBarrelNames>[];
    underbarrels: RifleUnderBarrelAttachment[];
    magazines: RifleMagazineAttachment[];
    rearGrips: RifleRearGripAttachment<AKGripNames>[];
    stocks: RifleStockAttachment[];
    lasers: RifleLaserAttachment<AKLaserNames>[];
    firemods: RifleFireModAttachments<AKFireModNames>[];
};

export type AKRifle = {
    name: string;
    image: string;
    attachments: AKAttachments;
};