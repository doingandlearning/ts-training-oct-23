import fs from "node:fs";

interface User {
  name: string;
  age: number;
  region: string;
}

interface Regions {
  [region: string]: string[];
}

interface NewsArticle {
  id: string;
  headline: string;
  content: string;
}

fs.readFile("./user.json", "utf-8", (error: Error | null, userData: string) => {
  if (error) {
    console.log(error);
    return;
  }

  const user: User = JSON.parse(userData);
  fs.readFile(
    "./regions.json",
    "utf-8",
    (error: Error | null, regionData: string) => {
      if (error) {
        console.log(error);
        return;
      }

      const regions: Regions = JSON.parse(regionData);
      const userNewsIds = regions[user.region];

      fs.readFile(
        "./news.json",
        "utf-8",
        (error: Error | null, newsData: string) => {
          if (error) {
            console.log(error);
            return;
          }

          const allNews: NewsArticle[] = JSON.parse(newsData);
          const userNews = allNews.filter((article) =>
            userNewsIds.includes(article.id)
          );

          userNews.forEach((news) => {
            console.log(news.headline);
            console.log(news.content);
            console.log("--------");
          });
        }
      );
    }
  );
});
