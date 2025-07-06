import { useComments } from "../hooks/useComments";
import type { News } from "../types/types";

type Props = {
  news: News;
};

export const CommentsPage = ({ news }: Props) => {
  const { comments, isLoading, error } = useComments(news.kids);

  if (isLoading) return <div>Loading....</div>;
  if (error) return <p>{error}</p>;

  return (
    <div className="px-3 py-2 border-transparent hover:bg-gray-800 bg-opacity-75 rounded-sm">
      {comments.map((comment) => (
        <div key={comment.id}>{comment.text}</div>
      ))}
    </div>
  );
};
