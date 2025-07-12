import React, { useState } from "react";
import type { News } from "../types/types";

type Props = {
  news: News;
};

export const SavedPost = ({ news }: Props) => {
  const [savedPostIds, setSavePostIds] = useState<number | null>(null);
  const [savedPost, setSavedPost] = useState<News[]>([]);

  return (
    <div>
      <header className="py-40 sm:py-20">
        <h1 className="text-4xl sm:text-6xl font-black text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500">
          Saved Post
        </h1>
      </header>
      
    </div>
  );
};
