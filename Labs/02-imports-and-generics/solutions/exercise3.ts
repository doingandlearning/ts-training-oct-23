import { Store as DataStore } from "./data";

const store = new DataStore<number>();
store.add(42);
store.log();
