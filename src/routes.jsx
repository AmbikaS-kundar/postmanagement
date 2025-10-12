import { Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList";
import PostCreate from "./pages/PostCreate";
import PostEdit from "./pages/PostEdit";
import PostView from "./pages/PostView";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/posts/new" element={<PostCreate />} />
      <Route path="/posts/:id/edit" element={<PostEdit />} />
      <Route path="/posts/:id" element={<PostView />} />
    </Routes>
  );
}
