import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Post = {
  slug: string;
  content: string;
  title: string;
  date: string;
};

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostSlugs = () => {
  const allDirents = fs.readdirSync(postsDirectory, { withFileTypes: true });
  return allDirents.filter((dirent) => dirent.isDirectory()).map(({ name }) => name);
};

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const fullPath = path.join(postsDirectory, slug, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Post = {
    slug: '',
    content: '',
    title: '',
    date: '',
  };

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (field === 'title' || field === 'date') {
      items[field] = data[field];
    }
  });
  return items;
};

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}
