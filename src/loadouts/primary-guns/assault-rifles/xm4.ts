import {Rifle, rifleMuzzleNames} from "@/types/rifle.ts";
import {muzzles} from "@/loadouts/attachments/muzzles.ts";
import {RifleMuzzleAttachment} from "@/types/muzzle.ts";

export const xm4: Rifle = {
    name: "XM4",
    image: "/images/guns/xm4.png",
    attachments: {
        muzzles: muzzles.filter(
            (muzzle): muzzle is RifleMuzzleAttachment =>
                rifleMuzzleNames.includes(muzzle.name)
        )
    }
}