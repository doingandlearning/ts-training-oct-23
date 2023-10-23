import DataStore, { IDataItem } from "./data";

const itemStore = new DataStore<IDataItem>();
itemStore.add({ id: 1, name: "Sample item" });
itemStore.log();
