import { useParams, Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

export default function PostView() {
  const { id } = useParams();
  const [posts] = useLocalStorage("posts", []);
  const post = posts.find((p) => p.id === id);

  if (!post) return <p>Post not found!</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-4">By {post.author}</p>
      <p className="mb-6">{post.content}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags?.map((t) => (
          <span key={t} className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{t}</span>
        ))}
      </div>
      <Link to="/" className="text-blue-600 mt-4 inline-block">← Back to list</Link>
    </div>
  );
}
