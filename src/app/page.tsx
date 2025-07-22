import Link from "next/link";

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


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        [...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 h-48">
            <img src={image.url} alt="image" className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      Hello (Gallery in progress)
    </main>
  );
}
