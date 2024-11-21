import {Attachment} from "@/types";

export type FireModNames =
    | ".22 WMR FMJ"
    | ".22 WMR Overpressured"
    | ".45 ACP FMJ"
    | ".45 ACP Overpressured"
    | "12 Gauge Slug"
    | "5.45x39mm FMJ"
    | "5.45x39mm Overpressured"
    | "5.56 NATO FMJ"
    | "5.56 NATO Overpressured"
    | "7.62 NATO FMJ"
    | "7.62 NATO Overpressured"
    | "7.62x39mm FMJ"
    | "7.62x39mm Overpressured"
    | "7.62x54mmR FMJ"
    | "7.62x54mmR Overpressured"
    | "9x18mm Makarov FMJ"
    | "9x19mm Overpressured"
    | "9x19mm Parabellum FMJ"
    | "9x19mm Parabellum Overpressured"
    | "9x39mm Soviet FMJ"
    | "9x39mm Soviet Overpressured"
    | "Rapid Fire"
    | "Recoil Springs";

type RifleFireModNames = Extract<FireModNames, "5.56 NATO FMJ"
    | "5.56 NATO Overpressured"
    | "Rapid Fire"
    | "Recoil Springs"
>

export type RifleFireModAttachments = Attachment<RifleFireModNames>