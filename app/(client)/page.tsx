import { client } from "@/sanity/lib/client";
import { Post } from "../utils/interface";
import Header from "../components/Header";

async function getPosts() {
  const query = `
  *[_type == 'post'] {
    title,
    slug,
    publishedAt,
    excerpt,
   
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts, "posts");
  return (
    <div>
   <Header title="Articles" tags />
    <div>
<h1>welcome pat</h1>
    </div>
  </div>
  );
}
