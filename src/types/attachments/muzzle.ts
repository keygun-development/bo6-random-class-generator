import {Attachment} from "@/types";

export type MuzzleNames = "Compensator"
    | "Full Choke"
    | "Modified Choke"
    | "Muzzle Brake"
    | "Ported Compensator"
    | "Suppressor";

type RifleMuzzleNames = Extract<
    MuzzleNames,
    "Compensator"
    | "Muzzle Brake"
    | "Suppressor"
    | "Ported Compensator"
>;

export type RifleMuzzleAttachment = Attachment<RifleMuzzleNames>;