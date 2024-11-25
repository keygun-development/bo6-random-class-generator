import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import {Paypal} from "@/lib/Paypal.ts";

export default function Header() {
    const paypal = new Paypal();
    return (
        <div className="max-h-20 h-20 overflow-hidden py-4 md:px-10 mx-auto xl:px-20 2xl:max-w-[1280px] 2xl:px-0 w-full px-4">
            <div className="flex items-center justify-between h-full space-x-4">
                <Link className="h-full" to="/">
                    <img src="/logo.png" className="h-full object-contain" alt="Call of Duty: BO6 Logo"/>
                </Link>
                <Button asChild size="pill" variant="paypal">
                    <a href={paypal.getUrl()}>
                        <img className="w-4" src="/paypal.svg" />
                        Donate via Paypal
                    </a>
                </Button>
            </div>
        </div>
    )
}