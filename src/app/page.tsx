import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <ProfileCard />
    </div>
  );
}
