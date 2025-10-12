import { useParams, useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import PostForm from "../components/PostForm";

export default function PostEdit() {
  const { id } = useParams();
  const [posts, setPosts] = useLocalStorage("posts", []);
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  const handleUpdate = (data) => {
    const updated = posts.map((p) =>
      p.id === id ? { ...p, ...data, updatedAt: new Date().toISOString() } : p
    );
    setPosts(updated);
    navigate("/");
  };

  if (!post) return <p>Post not found!</p>;

  return <PostForm initialData={post} onSubmit={handleUpdate} />;
}
