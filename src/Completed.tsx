import {Button} from "@/components/ui/button.tsx";

export default function ThankYou() {
    return (
        <div className="flex items-center justify-center min-h-screen md:px-10 mx-auto xl:px-20 2xl:max-w-[1280px] 2xl:px-0 w-full px-4">
            <div className="p-8 rounded-lg shadow-md text-center">
                <h1 className="text-4xl font-bold text-white tracking-wide">Thank You</h1>
                <p className="mt-4 text-white/80 ">
                    Your generosity is greatly appreciated. Your donation helps support our cause and keeps our efforts going strong.<br />
                    This project is really time consuming and doesn't generate any revenue, so your support is invaluable.
                </p>
                <p className="mt-4 text-white/80">
                    If you have any questions or need assistance, feel free to
                    <a href="mailto:keaganmulder1@gmail.com" className="text-blue-500 hover:underline ml-1">contact me</a>.
                </p>
                <p className="mt-6 text-white/80">Have a wonderful day!</p>
                <Button variant="primary" className="mt-4 text-white" asChild>
                    <a href="/">
                        Return Home
                    </a>
                </Button>
            </div>
        </div>
    );
};