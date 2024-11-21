import {Button} from "@/components/ui/button.tsx";

export default function Header() {
    return (
        <div className="max-h-20 h-20 overflow-hidden py-4 md:px-10 mx-auto xl:px-20 2xl:max-w-[1280px] 2xl:px-0 w-full px-4">
            <div className="flex items-center justify-between h-full">
                <a className="h-full" href="/">
                    <img src="/logo.png" className="h-full object-contain" alt="Call of Duty: BO6 Logo"/>
                </a>
                <Button variant="primary">
                    Randomize class
                </Button>
            </div>
        </div>
    )
}