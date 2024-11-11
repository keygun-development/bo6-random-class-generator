import {Rifle} from "@/types";

export const xm4: Rifle = {
    name: "XM4",
    image: "/images/guns/xm4.png",
    attachments: {
        muzzles: [
            {
                name: "Compensator",
                image: "/attachments/muzzles/compensator.png",
            },
            {
                name: "Suppressor",
                image: "/attachments/muzzles/suppressor.png",
            },
            {
                name: "Muzzle Brake",
                image: "/attachments/muzzles/muzzle_brake.png",
            },
            {
                name: "Ported Compensator",
                image: "/attachments/muzzles/ported_compensator.png"
            }
        ]
    }
}