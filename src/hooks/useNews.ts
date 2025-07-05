import { useEffect, useState } from "react";
import type { News } from "../types/types";
import { hnApi } from "../api/hnApi";

export const useNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchHackerNews = async () => {
    try {
      setIsLoading(true);
      const data = await hnApi.getHackerNews();
      setNews(data);
    } catch (error) {
      setError("An unknown error has occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHackerNews();
  }, []);

  return { news, isLoading, error };
};
