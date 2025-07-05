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
      <div className="text-sm font-normal text-gray-400 flex items-center gap-1">
        <p>{news.score}</p>
        &#x2022;
        <a href=""></a>
        <p>{getTimeAgo(news.time)}</p>
        &#x2022;
      </div>
    </div>
  );
};
