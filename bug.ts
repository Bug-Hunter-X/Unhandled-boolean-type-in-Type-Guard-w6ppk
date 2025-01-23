function printNumber(num: number): void {
  console.log(num);
}

function printString(str: string): void {
  console.log(str);
}

function processValue(value: number | string): void {
  if (typeof value === 'number') {
    printNumber(value);
  } else if (typeof value === 'string') {
    printString(value);
  } else {
    console.log('Type not supported');
  }
}

processValue(10); // Output: 10
processValue('hello'); // Output: hello
processValue(true); // Output: Type not supported //This is the bug, the type boolean is not handled