import Image from "next/image";
import Link from "next/link";

export default function HomeLink() {
    return (
        <Link
            href="/"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors m-2"
            aria-label="Home"
        >
            <Image
                src="https://github.com/dOtOb9.png"
                alt="Home Logo"
                width={32}
                height={32}
                className="rounded-full"
            />
            <span className="hidden sm:inline font-bold text-xl">dOtOb9</span>
        </Link>
    );
}