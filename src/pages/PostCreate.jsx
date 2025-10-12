import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";
import PostForm from "../components/PostForm";

export default function PostCreate() {
  const [posts, setPosts] = useLocalStorage("posts", []);
  const navigate = useNavigate();

  const handleCreate = (data) => {
    const newPost = { id: uuidv4(), ...data, createdAt: new Date().toISOString() };
    setPosts([...posts, newPost]);
    navigate("/");
  };

  return <PostForm onSubmit={handleCreate} />;
}
