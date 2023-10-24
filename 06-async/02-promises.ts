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

// What is a Promise?

// Waits -> returns result or not
// pending -> receipt
// resolve -> get what wanted
// reject  -> something went wrong

// function promiseReadfile(fileName: string): Promise<string> {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, "utf-8", (error: Error | null, data: string) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

fs.readFile("./user.json", "utf-8")
  .then((userData) => {
    const user: User = JSON.parse(userData);
    return fs
      .readFile("./regions.json", "utf-8")
      .then((regionsData) => ({ user, regionsData }));
  })
  .then(({ user, regionsData }) => {
    const regions: Regions = JSON.parse(regionsData);
    const userRegionNewsIds = regions[user.region];
    return fs
      .readFile("./news.json", "utf-8")
      .then((newsData) => ({ newsData, userRegionNewsIds }));
  })
  .then(({ userRegionNewsIds, newsData }) => {
    const allNews: NewsArticle[] = JSON.parse(newsData);
    const userNews = allNews.filter((article) =>
      userRegionNewsIds.includes(article.id)
    );

    userNews.forEach((news) => {
      console.log(news.headline);
      console.log(news.content);
      console.log("--------");
    });
  })
  .catch((error) => console.log("Something went wrong."));
