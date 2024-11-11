import {MuzzleAttachment} from "@/types/muzzle.ts";

export type Attachment<T extends string = string> = {
    name: T;
    image: string;
    description?: string;
    pros?: string[];
    cons?: string[];
};

export type RifleAttachments = {
    muzzles: Extract<MuzzleAttachment, {
        name: "Compensator" | "Muzzle Brake" | "Suppressor" | "Ported Compensator"
    }>[];
};

export type Rifle = {
    name: string;
    image: string;
    attachments: RifleAttachments;
}