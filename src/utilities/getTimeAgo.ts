export const getTimeAgo = (unixSeconds: number): string => {
  const now = Date.now() / 1000;
  const secondsElapsed = now - unixSeconds;

  if (secondsElapsed < 60) {
    return `${Math.floor(secondsElapsed)} second${
      secondsElapsed >= 2 ? "s" : ""
    } ago`;
  } else if (secondsElapsed < 3600) {
    const mins = Math.floor(secondsElapsed / 60);
    return `${mins} minute${mins !== 1 ? "s" : ""} ago`;
  } else if (secondsElapsed < 86400) {
    const hrs = Math.floor(secondsElapsed / 3600);
    return `${hrs} hour${hrs !== 1 ? "s" : ""} ago`;
  } else {
    const days = Math.floor(secondsElapsed / 86400);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  }
};
