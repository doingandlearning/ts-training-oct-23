import DataStore from "./data";

const stringStore = new DataStore<string>();
stringStore.add("Hello");
stringStore.log();

const numberStore = new DataStore<number>();
numberStore.add(42);
numberStore.log();
