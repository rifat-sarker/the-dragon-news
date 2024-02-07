export const getAllNews = async () => {
  const res = await fetch(
    "https://the-news-portal-server.vercel.app/all-news",
    {
      next: {
        revalidate: 3,
      },
    }
  );
  return res.json();
};
