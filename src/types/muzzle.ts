import {Attachment} from "@/types/index.ts";

export type MuzzleNames = "Compensator" | "Full Choke" | "Modified Choke" | "Muzzle Brake" | "Ported Compensator" | "Suppressor";

export type SpecificMuzzleAttachment<T extends MuzzleNames> = Attachment<T>;