import {Attachment} from "@/types";

export type UnderBarrelNames =
    | "Crossbar"
    | "Launcher - Drill Charge"
    | "Launcher - High Explosive"
    | "Launcher - Smoke"
    | "Launcher - Standard"
    | "Lightweight Foregrip"
    | "Lightweight Handguard"
    | "Marksman Foregrip"
    | "Marksman Handguard"
    | "Precision Foregrip"
    | "Precision Handguard"
    | "Ranger Foregrip"
    | "Ranger Handguard"
    | "Vertical Foregrip"
    | "Weighted Foregrip"
    | "Weighted Handguard";

type RifleUnderBarrelNames = Extract<UnderBarrelNames, "Launcher - Drill Charge"
    | "Launcher - High Explosive"
    | "Launcher - Smoke"
    | "Launcher - Standard"
    | "Lightweight Foregrip"
    | "Marksman Foregrip"
    | "Precision Foregrip"
    | "Ranger Foregrip"
    | "Vertical Foregrip"
>

export type RifleUnderBarrelAttachment = Attachment<RifleUnderBarrelNames>