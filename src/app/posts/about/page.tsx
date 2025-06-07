import BlogHeader from "@/components/BlogHeader";
import MarkdownPackage from "@/components/MarkdownPackage";

import Me from "@/markdown/me.mdx";

export default function About() {
    return (
        <div className="w-screen flex flex-col">
            <BlogHeader pageName="About"/>
            <MarkdownPackage>
                <Me />
            </MarkdownPackage>
            
        </div>
    );
}