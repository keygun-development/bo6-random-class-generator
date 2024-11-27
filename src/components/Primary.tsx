import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer.tsx";
import {Card} from "@/components/Card.tsx";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import {cn} from "@/lib/utils.ts";
import Attachment from "@/components/Attachment.tsx";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";

export default function Primary({item = {name: "xm4"}, hasGunfighter = true}: {
    item?: { name: string },
    hasGunfighter?: boolean
}) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className="w-full">
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Card item={item}/>
                        </DrawerTrigger>
                        <DrawerContent>
                            <VisuallyHidden>
                                <DrawerTitle>
                                    Attachments
                                </DrawerTitle>
                                <DrawerDescription>
                                    Attachments for the {item.name}
                                </DrawerDescription>
                            </VisuallyHidden>
                            <DrawerHeader>
                                <div className={cn("grid md:grid-cols-8 grid-cols-2 gap-4", {
                                    "grid-cols-5": !hasGunfighter
                                })}>
                                    <Attachment attachment={{name: "Muzzle", type: "Agency Suppressor"}}/>
                                    <Attachment attachment={{name: "Barrel", type: "Task Force"}}/>
                                    <Attachment attachment={{name: "Underbarrel", type: "Field Agent Grip"}}/>
                                    <Attachment attachment={{name: "Magazine", type: "Salvo 50 Rnd Fast Mag"}}/>
                                    <Attachment attachment={{name: "Handle", type: "Airborne Elastic Wrap"}}/>
                                    {hasGunfighter && <Attachment attachment={{name: "Gunfighter", type: "Wildcard"}}/>}
                                    {hasGunfighter && <Attachment attachment={{name: "Optic", type: "Axial Arms 3x"}}/>}
                                    {hasGunfighter && <Attachment attachment={{name: "Stock", type: "Raider Stock"}}/>}
                                </div>
                            </DrawerHeader>
                            <DrawerFooter>
                                <p className="text-white text-center">
                                    Slide to close
                                </p>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Click to reveal attachments</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}