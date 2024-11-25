import {Attachment} from "@/types";
import {StockPadNames} from "@/types/attachments/stockpad.ts";

export const stockPads: Attachment<StockPadNames>[] = [
    {
        name: "Lightweight Pad",
        image: "/attachments/stockpads/lightweight_pad.png",
    },
    {
        name: "Marksman Pad",
        image: "/attachments/stockpads/marksman_pad.png",
    },
    {
        name: "Precision Pad",
        image: "/attachments/stockpads/precision_pad.png",
    },
    {
        name: "Ranger Pad",
        image: "/attachments/stockpads/ranger_pad.png",
    },
    {
        name: "Weighted Pad",
        image: "/attachments/stockpads/weighted_pad.png",
    }
]