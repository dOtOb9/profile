import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


export default function getSortedPostsData({ Category }: { Category?: string } = {}) {

  const postsDirectory = path.join(process.cwd(), '/src/markdown/blogs/');
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      id: fileName.replace(/\.mdx$/, ''),
      date: matterResult.data.date || '',
      ...matterResult.data,
      tags: matterResult.data.tags || [],
      content: matterResult.content
    };
  });
  
  console.log("Category:", Category);
  let filteredPosts = allPostsData;
  if (Category === "others") {
    filteredPosts = allPostsData.filter(post => !post.tags || post.tags.length === 0);
  }

  const postsSortedByDate = filteredPosts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return postsSortedByDate;
}