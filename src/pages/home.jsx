import { Link } from "react-router";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Home</h1>
      <Link 
        to="/profile/12" 
        className="px-8 py-4 bg-red-600 text-white rounded-lg font-medium shadow-md hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
      >
        Profile 12
      </Link>
      <Link 
        to="/profile/18" 
        className="px-8 py-4 bg-red-600 text-white rounded-lg font-medium shadow-md hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
      >
        Profile 18
      </Link>
    </div>
  );
}
