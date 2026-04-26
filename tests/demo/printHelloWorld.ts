// function printHelloWOrld() : void{
//     console.log('Hello WOrld!');
// };

function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message: string = greet("World");
console.log(message);