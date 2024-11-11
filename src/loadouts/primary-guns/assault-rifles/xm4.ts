import {Rifle, RifleMuzzleAttachment} from "@/types/rifle.ts";
import {muzzles} from "@/loadouts/attachments/muzzles.ts";

export const xm4: Rifle = {
    name: "XM4",
    image: "/images/guns/xm4.png",
    attachments: {
        muzzles: muzzles as RifleMuzzleAttachment[]
    }
}