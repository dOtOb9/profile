import Image from "next/image";

export default function HomeIcon() {
    return (
      <a href="/" className="group relative block w-fit">
        <Image src="/profile.png" alt="Profile Picture" className="rounded-full transition duration-300 group-hover:opacity-70" width={150} height={150} />
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-30 opacity-0 hover:opacity-70 transition">
          <span className="text-white text-xl font-bold">Home</span>
        </div>
      </a>
    )
}