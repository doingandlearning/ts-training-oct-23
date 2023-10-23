import DataStore, { ICountable } from "./data";

const countableStore = new DataStore<ICountable>();
countableStore.add({ count: 5 });
countableStore.add({ count: 7 });

console.log(countableStore.getCount()); // Should log 12 to the console
