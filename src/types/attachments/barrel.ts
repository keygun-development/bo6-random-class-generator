import {Attachment} from "@/types";

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

export type RifleBarrelNames = Extract<BarrelNames, "CHF Barrel"
    | "Gain-Twist Barrel"
    | "Long Barrel"
    | "Reinforced Barrel"
    | "Short Barrel"
>

export type RifleBarrelAttachment<T extends string = RifleBarrelNames> = Attachment<T>