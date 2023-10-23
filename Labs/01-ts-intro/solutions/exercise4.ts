let numberMap = new Map<string, number>();
numberMap.set("key1", 10);
numberMap.set("key2", 20);

function sumMapValues(map: Map<string, number>): number {
  let sum = 0;
  for (let value of map.values()) {
    sum += value;
  }
  return sum;
}

console.log(sumMapValues(numberMap));
