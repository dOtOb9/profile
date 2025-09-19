import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import MarkdownPackage from "@/components/MarkdownPackage";

// ビルド時に全記事を同期的に読み込んでメモリに保持するヘルパー関数
function getPosts() {
  const dir = path.join(process.cwd(), "src/markdown");
  const files = fs.readdirSync(dir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(dir, file);
      // 生のファイル内容をそのまま読み込む
      const fileContent = fs.readFileSync(filePath, "utf8");
      // matterでフロントマターと生の内容を分離
      const { content, data } = matter(fileContent);
      return {
        slug,
        content,
        data,
      };
    });
}

// すべての投稿データをビルド時に一度だけ取得し、キャッシュする
const allPosts = getPosts();

// 投稿ごとに静的パスを生成する
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    // パラメータ名はファイル名と一致させる
    slugs: post.slug,
  }));
}

export default function PostPage({ params }: { params: { slugs: string } }) {
  // 動的パラメータからスラグを取得
  const slug = params.slugs;
  const post = allPosts.find((p) => p.slug === slug);

  // 記事が見つからない場合の処理
  if (!post) {
    return (
      <div className="w-full lg:w-1/2 ml-auto h-screen flex flex-col items-center fixed right-0 top-0 overflow-y-auto bg-white">
        <div>Not found.</div>
      </div>
    );
  }

  // MDXRemoteに生のコンテンツを渡す
  return (
    <div className="w-full lg:w-1/2 ml-auto h-screen flex flex-col items-center fixed right-0 top-0 overflow-y-auto bg-white">
      <MarkdownPackage>
        <MDXRemote source={post.content} />
      </MarkdownPackage>
    </div>
  );
}