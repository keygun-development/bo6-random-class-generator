import {Attachment} from "@/types";

export type RearGripNames =
    | "Assault Grip"
    | "Commando Grip"
    | "CQB Grip"
    | "Ergonomic Grip"
    | "Quickdraw Grip";

export type RifleRearGripNames = Extract<RearGripNames, "Assault Grip"
    | "Commando Grip"
    | "CQB Grip"
    | "Ërgonomic Grip"
>

export type RifleRearGripAttachment<T extends string = RearGripNames> = Attachment<T>