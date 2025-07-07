import { Link } from "react-router-dom";
import type { News } from "../types/types";
import { getTimeAgo } from "../utilities/getTimeAgo";

type Props = {
  news: News;
};

export const NewsPost = ({ news }: Props) => {
  return (
    <div className="text-left" key={news.id}>
      <a
        className="text-lg font-semibold leading-3 text-gray-300 group-hover:to-blue-400"
        href={news.url}
      >
        {news.title}
      </a>
      <div className="text-sm font-normal text-gray-400 flex items-center gap-1 mb-6">
        <p>{news.score} points</p>
        &#x2022;
        {typeof news.descendants === "number" && news.descendants > 0 && (
          <Link to={`/comments/${news.id}`} className="underline">
            {news.descendants} comments
          </Link>
        )}
        &#x2022;
        <p>{getTimeAgo(news.time)}</p>
      </div>
    </div>
  );
};
