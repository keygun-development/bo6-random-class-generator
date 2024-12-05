import {RifleMagazineNames} from "@/types/attachments/magazine.ts";
import {StockNames} from "@/types/attachments/stock.ts";

export type KrigMagazineNames = Extract<RifleMagazineNames,
    "Extended Mag I"
    | "Extended Mag II"
    | "Fast Mag II"
    | "Flip Mag"
>;

export type KrigStockNames = Extract<StockNames,
    "Balanced Stock"
    | "Combat Stock"
    | "Heavy Stock"
    | "Infiltrator Stock"
    | "No Stock"
>;