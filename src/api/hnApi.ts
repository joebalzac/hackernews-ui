import type { News } from "../types/types";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const hnApi = {
  getHackerNews: async (): Promise<News[]> => {
    const topStories = `${BASE_URL}/topstories.json`;

    try {
      const res = await fetch(topStories);
      const ids: number[] = await res.json();

      const limitedIds = ids.slice(0, 20);

      const storyPromises = limitedIds.map((id) =>
        fetch(`${BASE_URL}/item/${id}.json`).then((res) => res.json())
      );
      const stories = await Promise.all(storyPromises);
      return stories;
    } catch (error) {
      console.error("Failed to fetch news", error);
      throw error;
    }
  },
};
