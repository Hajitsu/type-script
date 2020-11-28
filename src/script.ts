class MyArray<T extends string | number, U extends boolean> {
  constructor(public data: T[], private ata2: U[]) {}
  addItem(item: T): void {
    this.data.push(item);
  }
  getItem(index: number): T {
    return this.data[index];
  }
}

let myList = new MyArray<number, boolean>([1, 2, 3, 4, 5, 6, 7, 8, 9], [true, false]);
let myList2 = new MyArray<string, boolean>(["1", "2", "3", "4", "5", "6", "7", "8", "9"], [true, true, true, false]);
console.log(myList);
myList.addItem(10);
console.log(myList.data);

function logParams<T extends number | string, U extends boolean | object>(x: T, y: U): void {
  console.log(x, y);
}

logParams<string, boolean>("hajitsu", true);
