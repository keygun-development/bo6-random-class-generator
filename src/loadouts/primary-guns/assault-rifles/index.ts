import {GenericRifle, GenericRifleAttachments} from "@/types/guns/assault-rifles/rifle.ts";
import {xm4} from "@/loadouts/primary-guns/assault-rifles/xm4.ts";
import {AKAttachments} from "@/types/guns/assault-rifles/ak74.ts";
import {ak74} from "@/loadouts/primary-guns/assault-rifles/ak74.ts";
import {krigc} from "@/loadouts/primary-guns/assault-rifles/krigc.ts";

export const assaultRifles: GenericRifle<GenericRifleAttachments | AKAttachments>[] = [xm4, ak74, krigc]