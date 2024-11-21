import {Attachment} from "@/types";

export type MagazineNames =
    | "Extended Mag I"
    | "Extended Mag II"
    | "Extended Mag III"
    | "Extended Mag IV"
    | "Fast Mag I"
    | "Fast Mag II"
    | "Fast Mag III"
    | "Flip Mag";

type RifleMagazineNames = Extract<MagazineNames, "Extended Mag I"
    | "Extended Mag II"
    | "Extended Mag III"
    | "Fast Mag I"
    | "Fast Mag II"
    | "Flip Mag"
>

export type RifleMagazineAttachment = Attachment<RifleMagazineNames>