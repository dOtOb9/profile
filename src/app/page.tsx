import ProfileCard from "@/components/ProfileCard";
import SearchField from "@/components/SearchField";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <ProfileCard />
      <SearchField />
    </div>
  );
}
