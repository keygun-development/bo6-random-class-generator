export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="w-full py-1 border-t border-gray-400 bg-gray-500">
            <p className="font-sans text-white text-center flex justify-center gap-x-1">
                &copy; {year}
                <a href="https://github.com/keygun-development/bo6-random-class-generator"
                   className="font-semibold hover:underline"
                   target="_blank"
                >
                    @Keygun-development
                </a>
            </p>
        </div>
    )
}