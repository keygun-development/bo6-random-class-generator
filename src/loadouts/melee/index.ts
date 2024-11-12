import {Melee} from "@/types";
import {Melees} from "@/types/melees";

export const melees: Melee<Melees>[] = [
    {
        name: "Knife",
        description: "One hit kill.",
        image: "/melees/knife.png",
    },
    {
        name: "Baseball Bat",
        description: "Two hit kill.",
        image: "/melees/baseball-bat.png",
    }
]