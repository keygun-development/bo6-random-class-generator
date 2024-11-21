import {Attachment} from "@/types";

export type RearGripNames =
    | "Assault Grip"
    | "Commando Grip"
    | "CQB Grip"
    | "Ergonomic Grip"
    | "Quickdraw Grip";

type RifleRearGripNames = Extract<RearGripNames, "Assault Grip"
    | "Commando Grip"
    | "CQB Grip"
    | "Ërgonomic Grip"
>

export type RifleRearGripAttachment = Attachment<RifleRearGripNames>