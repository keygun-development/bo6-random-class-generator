import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import {Paypal} from "@/lib/Paypal.ts";

export default function Header() {
    const paypal = new Paypal();
    return (
        <div
            className="max-h-20 h-20 overflow-hidden py-4 md:px-10 mx-auto xl:px-20 2xl:max-w-[1280px] 2xl:px-0 w-full px-4">
            <div className="flex items-center justify-between h-full space-x-4">
                <Link className="h-full" to="/">
                    <picture>
                        <img
                            className="object-contain h-full"
                            sizes="(max-width: 512px) 100vw, 512px"
                            srcSet="
                                /logo_s7iqyg_c_scale,w_320.png 320w,
                                /logo_s7iqyg_c_scale,w_512.png 512w"
                            src="/logo_s7iqyg_c_scale,w_512.png"
                            alt="Call Of Duty: BO6 Logo"/>
                    </picture>
                </Link>
                <Button asChild size="pill" variant="paypal">
                    <a href={paypal.getUrl()}>
                        <img width="20" height="20" alt="Paypal logo" className="w-4" src="/paypal.svg"/>
                        Donate via Paypal
                    </a>
                </Button>
            </div>
        </div>
    )
}