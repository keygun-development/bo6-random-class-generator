import {
    Rifle,
    rifleBarrelNames, rifleFireModNames, rifleLaserNames,
    rifleMagazineNames,
    rifleMuzzleNames,
    rifleOpticNames, rifleRearGripNames, rifleStockNames,
    rifleUnderBarrelNames
} from "@/types/rifle.ts";
import {muzzles} from "@/loadouts/attachments/muzzles.ts";
import {RifleMuzzleAttachment} from "@/types/attachments/muzzle.ts";
import {optics} from "@/loadouts/attachments/optics.ts";
import {RifleOpticAttachment} from "@/types/attachments/optic.ts";
import {barrels} from "@/loadouts/attachments/barrels.ts";
import {RifleBarrelAttachment} from "@/types/attachments/barrel.ts";
import {underBarrels} from "@/loadouts/attachments/underbarrels.ts";
import {RifleUnderBarrelAttachment} from "@/types/attachments/underbarrel.ts";
import {magazines} from "@/loadouts/attachments/magazines.ts";
import {RifleMagazineAttachment} from "@/types/attachments/magazine.ts";
import {rearGrips} from "@/loadouts/attachments/reargrips.ts";
import {RifleRearGripAttachment} from "@/types/attachments/reargrip.ts";
import {stocks} from "@/loadouts/attachments/stocks.ts";
import {RifleStockAttachment} from "@/types/attachments/stock.ts";
import {lasers} from "@/loadouts/attachments/lasers.ts";
import {RifleLaserAttachment} from "@/types/attachments/laser.ts";
import {firemods} from "@/loadouts/attachments/firemods.ts";
import {RifleFireModAttachments} from "@/types/attachments/firemods.ts";

export const xm4: Rifle = {
    name: "XM4",
    image: "/images/guns/xm4.png",
    attachments: {
        muzzles: muzzles.filter(
            (muzzle): muzzle is RifleMuzzleAttachment =>
                rifleMuzzleNames.includes(muzzle.name)
        ),
        optics: optics.filter((optic): optic is RifleOpticAttachment =>
            rifleOpticNames.includes(optic.name)
        ),
        barrels: barrels.filter(
            (barrel): barrel is RifleBarrelAttachment =>
                rifleBarrelNames.includes(barrel.name)
        ),
        underbarrels: underBarrels.filter(
            (underbarrel): underbarrel is RifleUnderBarrelAttachment =>
                rifleUnderBarrelNames.includes(underbarrel.name)
        ),
        magazines: magazines.filter(
            (magazine): magazine is RifleMagazineAttachment =>
                rifleMagazineNames.includes(magazine.name)
        ),
        rearGrips: rearGrips.filter(
            (rearGrip): rearGrip is RifleRearGripAttachment =>
                rifleRearGripNames.includes(rearGrip.name)
        ),
        stocks: stocks.filter(
            (stock): stock is RifleStockAttachment =>
                rifleStockNames.includes(stock.name)
        ),
        lasers: lasers.filter(
            (laser): laser is RifleLaserAttachment =>
                rifleLaserNames.includes(laser.name)
        ),
        firemods: firemods.filter(
            (firemod): firemod is RifleFireModAttachments =>
                rifleFireModNames.includes(firemod.name)
        )
    }
}