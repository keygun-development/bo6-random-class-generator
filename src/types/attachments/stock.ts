import {Attachment} from "@/types";

export type StockNames =
    | "Agility Stock"
    | "Akimbo 9mm PM"
    | "Akimbo Grekhova"
    | "Akimbo GS45"
    | "Akimbo Stryder .22"
    | "Balanced Stock"
    | "Combat Stock"
    | "Ergonomic Stock"
    | "Full Stock"
    | "Heavy Stock"
    | "Infiltrator Stock"
    | "Light Stock"
    | "No Stock"
    | "Weighted Stock";

export type RifleStockNames = Extract<StockNames, "Balanced Stock"
    | "Combat Stock"
    | "Heavy Stock"
    | "Infiltrator Stock"
    | "Light Stock"
>

export type RifleStockAttachment<T extends string = StockNames> = Attachment<T>