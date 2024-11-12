import {Attachment} from "@/types/index.ts";

export type BarrelNames =
    | "CHF Barrel"
    | "Combat Barrel"
    | "Gain-Twist Barrel"
    | "Heavy Barrel"
    | "Integrated Suppressor Barrel"
    | "Long Barrel"
    | "Quick Load Barrel"
    | "Reinforced Barrel"
    | "Short Barrel"
    | "Suppressed CHF Barrel"
    | "Suppressed Gain-Twist Barrel"
    | "Suppressed Long Barrel"
    | "Suppressed Reinforced Barrel";

export type RifleBarrelNames = Extract<
    BarrelNames,
    | "CHF Barrel"
    | "Combat Barrel"
    | "Gain-Twist Barrel"
    | "Heavy Barrel"
    | "Integrated Suppressor Barrel"
>;

export type RifleBarrelAttachment = Attachment<RifleBarrelNames>;