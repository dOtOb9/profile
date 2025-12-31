

export default function AboutMe({ onClick }: { onClick?: () => void }) {
  return (
    <div className="flex flex-row items-center justify-center hover:text-blue-500 hover:cursor-pointer text-shadow-md hover:text-shadow-xl active:text-shadow-none" onClick={onClick}>
      <div className="py-16 animate-bounce font-bold text-5xl">
        <button className="rotate-90 text-black">＞</button>
      </div>
      <p className="text-3xl mb-4 text-black">About Me</p>
    </div>
  );
}