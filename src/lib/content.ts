import matter from "gray-matter";
import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getContent<T = Record<string, unknown>>(
  slug: string
): { data: T; content: string } {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { data: data as T, content: content.trim() };
}
