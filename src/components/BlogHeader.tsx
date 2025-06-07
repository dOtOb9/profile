import GitHubLink from '@/components/GitHubLink';
import HomeLink from '@/components/HomeLink';

export default function BlogHeader({ pageName }: { pageName: string }) {
    return (
        <header className="fixed top-0 w-full not-prose flex flex-row justify-between border-b-4 border-gray-300 bg-white">
            <HomeLink />
            <p className=" text-4xl font-bold m-2">{pageName}</p>
            <GitHubLink />
        </header>
    );
}