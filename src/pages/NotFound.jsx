import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-indigo-500">404</h1>
      <p className="text-xl mt-2 text-gray-600">Page Not Found</p>

      <Link
        to="/dashboard"
        className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-lg"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};