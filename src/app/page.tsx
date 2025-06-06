import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <ProfileCard />
      <form className="w-full flex justify-center mt-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-2xl p-4 my-20 border border-gray-300 rounded-full bg-white outline-none shadow focus:ring-2 focus:ring-blue-400 transition"
          aria-label="Search"
        />
      </form>
    </div>
  );
}
