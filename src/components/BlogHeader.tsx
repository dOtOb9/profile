import GitHubLink from '@/components/GitHubLink';
import HomeLink from '@/components/HomeLink';

export default function BlogHeader({ pageName }: { pageName: string }) {
    return (
        <header className="not-prose flex flex-row justify-between  mb-8 border-b-4 border-gray-300">
            <HomeLink />
            <p className=" text-4xl font-bold m-2">{pageName}</p>
            <GitHubLink />
        </header>
    );
}