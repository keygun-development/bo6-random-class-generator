import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils.ts";
import React from "react";

export interface CardProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    item?: {
        name: string;
    };
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, item, onClick, ...props }, ref) => {
        return (
                        <div
                            ref={ref}
                            onClick={onClick}
                            className={cn(
                                "w-full max-h-[200px] aspect-square flex items-center justify-center bg-gray-500/50 border border-gray-400 hover:bg-gray-500/60 cursor-pointer duration-300",
                                className
                            )}
                            {...props}
                        >
                            {item && <p className="text-white">{item.name}</p>}
                            {!item && <PlusIcon className="stroke-white"/>}
                        </div>
        );
    }
);
Card.displayName = "Card";
