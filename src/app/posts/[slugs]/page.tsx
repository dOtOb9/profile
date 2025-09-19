
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import MarkdownPackage from "@/components/MarkdownPackage";

export default async function PostPage({ params }: { params: { slugs: string | string[] } }) {
    let slug = "";
    console.log("Params:", params);
    if (Array.isArray(params.slugs)) {
        slug = params.slugs.join("");
    } else if (typeof params.slugs === "string") {
        slug = params.slugs;
    }
    let content = "";
    try {
        const filePath = path.join(process.cwd(), "src/markdown", `${slug}.mdx`);
    const file = await fs.readFile(filePath, "utf8");
        const { content: mdxContent } = matter(file);
        content = mdxContent;
    } catch (e) {
        content = "Not found.";
    }
    return (
        <div className="w-full lg:w-1/2 ml-auto h-screen flex flex-col items-center fixed right-0 top-0 overflow-y-auto bg-white">
          <MarkdownPackage>
            {content !== "Not found." ? <MDXRemote source={content} /> : <div>Not found.</div>}
          </MarkdownPackage>
        </div>
    );
}