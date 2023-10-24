import fs from "node:fs/promises";

type User = {
  name: string;
  age: number;
  region: string;
};

type Regions = {
  [key: string]: string[];
};

type NewsArticle = {
  id: string;
  headline: string;
  content: string;
};

async function getNewsForUser(userFilePath: string): Promise<void> {
  try {
    // Parsing user
    const userDataString = await fs.readFile(userFilePath, "utf-8");
    const user: User = JSON.parse(userDataString);

    // Parsing regions
    const regionsDataString = await fs.readFile("./regions.json", "utf-8");
    const regions: Regions = JSON.parse(regionsDataString);
    const userNewsIds = regions[user.region];

    // Parsing news
    const newsDataString = await fs.readFile("./news.json", "utf-8");
    const allNews: NewsArticle[] = JSON.parse(newsDataString);
    const userNews = allNews.filter((article) =>
      userNewsIds.includes(article.id)
    );

    userNews.forEach((news) => {
      console.log(news.headline);
      console.log(news.content);
      console.log("--------");
    });
  } catch (error) {
    console.log(error);
  }
}

getNewsForUser("./user.json");

// Promise.all([]) <-
// Promise.race([])
// Promise.allSettled([]) <-
