import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import MarkdownPackage from "@/components/MarkdownPackage";
import TechStacks from '@/components/TechStacks';

// ビルド時に全記事を同期的に読み込んでメモリに保持するヘルパー関数
const posts = (() => {
  const dir = path.join(process.cwd(), "/src/markdown/blogs/");
  const files = fs.readdirSync(dir);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(dir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { content } = matter(fileContent);
      return { slug, content };
    });
})();

const mdxComponents = {
  TechStacks,
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slugs: post.slug }));
}

export default async function Page({ params }: { params: any }) {
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slugs) ? resolvedParams.slugs.join("") : await resolvedParams.slugs;
  const post = posts.find((p) => p.slug === slug);
  const content = post ? post.content : "Not found.";
  return (
    <div className="w-full lg:w-1/2 ml-auto h-screen flex flex-col items-center fixed right-0 top-0 overflow-y-auto overflow-x-hidden bg-white">
      <MarkdownPackage>
        {content !== "Not found." ? <MDXRemote source={content} components={mdxComponents} /> : <div>Not found.</div>}
      </MarkdownPackage>
    </div>
  );
}