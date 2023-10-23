import DataStore, { ICountable } from "./data";

interface OurCount {
  name: string;
  count: number;
}

const countableStore = new DataStore<OurCount>();
countableStore.add({ name: "Kevin", count: 5 });
countableStore.add({ name: "Fiona", count: 7 });

console.log(countableStore.getCount()); // Should log 12 to the console
