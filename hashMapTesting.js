import { HashMap } from "./HashMap.js";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('jacket', 'violet');
test.set('kite', 'GREEN MF');
test.set('bingo', 'BOO BOO');
console.log(test.get('dog'));
console.log(test.get('bingo'));
console.log(test.has('banana'));
console.log(test.get('banana'));
test.remove('banana');
test.set('banana', 'black');
console.log(test.entries());
console.log(test.length())
console.log(test.keys())
console.log(test.values());
test.clear();
console.log(test.entries());