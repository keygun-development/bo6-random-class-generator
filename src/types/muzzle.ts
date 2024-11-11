import {Attachment} from "@/types/index.ts";

export type MuzzleNames = "Compensator" | "Full Choke" | "Modified Choke" | "Muzzle Brake" | "Ported Compensator" | "Suppressor";

type SpecificMuzzleAttachment<T extends MuzzleNames> = Attachment<T>;

export type MuzzleAttachment = SpecificMuzzleAttachment<"Compensator">
    | SpecificMuzzleAttachment<"Full Choke">
    | SpecificMuzzleAttachment<"Modified Choke">
    | SpecificMuzzleAttachment<"Muzzle Brake">
    | SpecificMuzzleAttachment<"Ported Compensator">
    | SpecificMuzzleAttachment<"Suppressor">;
