import { getCollection, CollectionEntry } from "astro:content";

import rss from "@astrojs/rss";

import { formatBlogPosts } from "../js/utils";
const base = import.meta.env.BASE_URL;
const postImportResult = await getCollection("blog");
const posts: CollectionEntry<"blog">[] = formatBlogPosts(postImportResult);

export const get = () =>
  rss({
    stylesheet: "/rss/styles.xsl",
    title: "My Astro Blog",
    description: "A humble Astronaut’s guide to the stars",
    site: "https://www.leotg.com",
    items: posts.map((post) => ({
      link: `${base}blog/${post.slug}`,
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      customData: `
      <author>${post.data.author}</author>
    `,
    })),
  });
