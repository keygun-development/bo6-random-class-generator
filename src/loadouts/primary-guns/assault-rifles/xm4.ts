import {Rifle, rifleMuzzleNames, rifleOpticNames} from "@/types/rifle.ts";
import {muzzles} from "@/loadouts/attachments/muzzles.ts";
import {RifleMuzzleAttachment} from "@/types/attachments/muzzle.ts";
import {optics} from "@/loadouts/attachments/optics.ts";
import {RifleOpticAttachment} from "@/types/attachments/optic.ts";

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
    }
}