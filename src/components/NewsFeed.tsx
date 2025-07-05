import { useNews } from "../hooks/useNews";
import { NewsPost } from "./NewsPost";

export const NewsFeed = () => {
  const { news, isLoading, error } = useNews();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="flex items-center gap-4">
        <h1 className="text-4xl sm:text-6xl font-black text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500">
          HackerNews
        </h1>
        <img
          src="/anonymous.png"
          alt="Anonymous Logo"
          className="w-16 h-auto mt-4"
        />
      </div>

      <div>
        {news.map((n) => (
          <NewsPost news={n} />
        ))}
      </div>
    </div>
  );
};
