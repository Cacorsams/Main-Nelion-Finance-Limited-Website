import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = join(process.cwd(), "markdown/blogs");

export function getPostSlugs(locale: string = 'en') {
  const localeDir = join(postsDirectory, locale);
  if (!fs.existsSync(localeDir)) return [];
  return fs.readdirSync(localeDir);
}

export function getPostBySlug(slug: string, fields: string[] = [], locale: string = 'en') {
  const realSlug = slug.replace(/\.mdx$/, "");
  const localeDir = join(postsDirectory, locale);
  const fullPath = join(localeDir, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    // Fallback to English if localized version not found
    const fallbackPath = join(postsDirectory, 'en', `${realSlug}.mdx`);
    if (!fs.existsSync(fallbackPath)) return null;
    const fileContents = fs.readFileSync(fallbackPath, "utf8");
    const { data, content } = matter(fileContents);
    return extractFields(realSlug, data, content, fields);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return extractFields(realSlug, data, content, fields);
}

function extractFields(realSlug: string, data: any, content: string, fields: string[]) {
  const items: any = {};
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = (content);
    }
    if (field === "metadata") {
      items[field] = { ...data, coverImage: data.coverImage || null };
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllPosts(fields: string[] = [], locale: string = 'en') {
  const slugs = getPostSlugs(locale);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, locale))
    .filter(post => post !== null)
    // sort posts by date in descending order
    .sort((post1: any, post2: any) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
