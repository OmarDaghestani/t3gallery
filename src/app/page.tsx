import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://ispvvfkkvc.ufs.sh/f/FBTy3cAU5ujJ9gnpe1Z1B6NHXObyscPFrm4CL7uGEVq0URaW",
  "https://ispvvfkkvc.ufs.sh/f/FBTy3cAU5ujJJzZavLE2I5m1gtC9XM6pVZNvbeFoasljTfYi",
  "https://ispvvfkkvc.ufs.sh/f/FBTy3cAU5ujJvm3S7yVh83t2LsAZODK4yWHRgXCjUJQMqiu5",
  "https://ispvvfkkvc.ufs.sh/f/FBTy3cAU5ujJvm3S7yVh83t2LsAZODK4yWHRgXCjUJQMqiu5",
  "https://ispvvfkkvc.ufs.sh/f/FBTy3cAU5ujJvloylqVh83t2LsAZODK4yWHRgXCjUJQMqiu5",
  "https://ispvvfkkvc.ufs.sh/f/FBTy3cAU5ujJy2AXlNHLSwHPN0M3l4I9v1kW7QBCTnOKqeYh",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));


export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 h-48">
            <img src={image.url} alt="image" className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      Hello (Gallery in progress)
    </main>
  );
}
