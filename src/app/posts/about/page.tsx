import BlogHeader from "@/components/BlogHeader";
import MarkdownPackage from "@/components/MarkdownPackage";

import Me from "@/markdown/me.mdx";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen pt-14 bg-blue-100 w-full">
            <BlogHeader pageName="About"/>
            <div className="flex flex-col items-center justify-center flex-1">
                <div className="bg-white p-8 sm:m-4">
                    <MarkdownPackage>
                        <Me />
                    </MarkdownPackage>
                </div>
            </div>
        </div>
    );
}