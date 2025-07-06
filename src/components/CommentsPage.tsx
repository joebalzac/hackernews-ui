import { CiUser } from "react-icons/ci";
import { useComments } from "../hooks/useComments";
import type { News } from "../types/types";
import { getTimeAgo } from "../utilities/getTimeAgo";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { hnApi } from "../api/hnApi";
import { IoIosArrowBack } from "react-icons/io";

export const CommentsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [story, setStory] = useState<News | null>(null);

  const fetchStory = async () => {
    if (!id) return;

    try {
      const data = await hnApi.getStory(Number(id));
      setStory(data);
    } catch (error) {
      console.error("Failed to fetch story", error);
    }
  };

  useEffect(() => {
    fetchStory();
  }, [id]);

  const { comments, isLoading, error } = useComments(story?.kids);

  if (!story) return <div>Loading story...</div>;
  if (isLoading) return <div>Loading....</div>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div>
        <button onClick={() => navigate(-1)}>
          <IoIosArrowBack />
          Back
        </button>
        <h2 className="text-2xl font-bold mb-2">{story?.title}</h2>
        <div className="text-sm text-gray-400 mb-4">
          by {story?.by} • {getTimeAgo(story.time)}
        </div>
      </div>
      <div className="my-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="cursor-pointer relative px-3 py-2 -my-2 -ml-2 -mr-3 border-2 border-transparent rounded-md  sm:-ml-3 sm:hover:border-gray-700 sm:hover:bg-gray-900 hover:bg-gray-800 hover:bg-opacity-75 "
          >
            <div className="flex items-center text-gray-400 mb-1 text-sm">
              <CiUser />
              <span>{comment.by}</span>
              <span>{getTimeAgo(comment.time)}</span>
            </div>
            <div
              className="px-3 py-2 border-transparent hover:bg-gray-800 bg-opacity-75 rounded-sm text-left"
              dangerouslySetInnerHTML={{ __html: comment.text }}
            />
          </div>
        ))}
      </div>
    </>
  );
};
