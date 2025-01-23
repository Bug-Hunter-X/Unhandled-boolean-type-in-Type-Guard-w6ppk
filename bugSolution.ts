function printNumber(num: number): void {
  console.log(num);
}

function printString(str: string): void {
  console.log(str);
}

function processValue(value: number | string | boolean): void {
  if (typeof value === 'number') {
    printNumber(value);
  } else if (typeof value === 'string') {
    printString(value);
  } else if (typeof value === 'boolean'){
    console.log(`Boolean value: ${value}`);
  } else {
    console.error('Type not supported');
  }
}

processValue(10); // Output: 10
processValue('hello'); // Output: hello
processValue(true); // Output: Boolean value: true
processValue(null); //Output: Type not supported