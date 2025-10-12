import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Post Management</Link>
      <Link
        to="/posts/new"
        className="bg-white text-blue-600 px-4 py-2 rounded font-semibold"
      >
        + New Post
      </Link>
    </header>
  );
}
