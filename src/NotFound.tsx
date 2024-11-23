import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex items-center flex-col justify-center h-screen">
            <h1 className="text-4xl text-white">404 - Not Found</h1>
            <Button asChild variant="primary">
                <Link to="/">
                    Go back to home
                </Link>
            </Button>
        </div>
    )
}