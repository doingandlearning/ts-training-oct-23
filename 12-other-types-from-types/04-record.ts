interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "mog" | "mordred" | "molly";

type cats = {
  [name: string]: CatInfo;
};

const cats: Record<CatName, CatInfo> = {
  miffy: {
    age: 1,
    breed: "tabby",
  },
};
