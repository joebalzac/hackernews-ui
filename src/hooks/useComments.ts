import { useEffect, useState } from "react";
import type { Comments } from "../types/types";
import { hnApi } from "../api/hnApi";

export const useComments = (commentIds: number[] | undefined) => {
  const [comments, setComments] = useState<Comments[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchComments = async () => {
    if (!commentIds || commentIds.length === 0) return;

    try {
      setIsLoading(true);
      const commentPromises = commentIds.map((id) => hnApi.getComments(id));
      const data = await Promise.all(commentPromises);
      setComments(data);
    } catch (error) {
      setError("Failed to fetch comments");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return { comments, isLoading, error };
};
