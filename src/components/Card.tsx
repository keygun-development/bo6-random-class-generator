import {PlusIcon} from "lucide-react";
import {cn} from "@/lib/utils.ts";

export default function Card({className, item}: { className?: string, item?: { name: string } }) {
    return (
        <div className={cn(
            "w-full max-h-[200px] aspect-square flex items-center justify-center bg-gray-500/50 border border-gray-400 hover:bg-gray-500/60 cursor-pointer duration-300",
            className)
        }>
            {item && (
                <p className="text-white">
                    {item.name}
                </p>
            )}
            {!item && (
                <PlusIcon className="stroke-white"/>
            )}
        </div>
    )
}