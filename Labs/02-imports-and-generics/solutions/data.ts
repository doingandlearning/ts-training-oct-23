// For exercise 1 and 4:
class DataStore<T> {
  private data: T[] = [];
  constructor() {}
  add(item: T): void {
    this.data.push(item);
  }
  log(): void {
    console.log(this.data);
  }
}
export default DataStore;

// For exercise 2:
// export interface IDataStore<T> {
//   add(item: T): void;
//   log(): void;
// }

// export interface IDataItem {
//   // The shape of the items goes here
//   // For the purpose of this example, I'm assuming a generic shape
//   [key: string]: any;
// }

// class DataStore<T> implements IDataStore<T> {
//   private data: T[] = [];
//   constructor() {}
//   add(item: T): void {
//     this.data.push(item);
//   }
//   log() {
//     console.log(this.data);
//   }
// }

// export default DataStore;

// For exercise 3
// class DataStore<T> {
//   private data: T[] = [];
//   constructor() {}
//   add(item: T): void {
//     this.data.push(item);
//   }
//   log() {
//     console.log(this.data);
//   }
// }
// export { DataStore as Store };

// For exercise 5
// export interface ICountable {
//   count: number;
// }

// class DataStore<T extends ICountable> {
//   private data: T[] = [];
//   constructor() {}
//   add(item: T): void {
//     this.data.push(item);
//   }
//   getCount(): number {
//     return this.data.reduce((total, item) => total + item.count, 0);
//   }
// }

// export default DataStore;
