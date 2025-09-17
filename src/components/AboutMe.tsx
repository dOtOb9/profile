

export default function AboutMe({ onClick }: { onClick?: () => void }) {
  return (
    <div className="flex flex-row items-center justify-center hover:text-blue-500 hover:cursor-pointer" onClick={onClick}>
      <div className="py-16 animate-bounce font-bold text-5xl">
        <button className="rotate-90">＞</button>
      </div>
      <p className="text-3xl mb-4">About Me</p>
    </div>
  );
}