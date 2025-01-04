import BlogContent from "@/components/BlogContent";
import Hero from "@/components/Hero";
import { sanityClient } from "@/lib/createClient"; // Ensure you import sanityClient
import { groq } from "next-sanity";

export const revalidate = 30;

const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

export default async function Home() {
  const posts = await sanityClient.fetch(query); // Use sanityClient instead of client
  // console.log(posts);

  return (
    <main>
      <Hero />
      <BlogContent posts={posts} />
    </main>
  );
}
