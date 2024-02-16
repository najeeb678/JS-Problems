9; //Implement enqueue and dequeue using only two stacks
let stack1 = [];
let stack2 = [];

function enqueue(value) {
  stack1.push(value);
}

function dequeue() {
  if (stack1.length === 0) {
    console.log("dequeue is not possibel as stack1 is empty");
  } else if (stack1.length > 0) {
    let value = stack1.shift();
    stack2.push(value);
  }
}

enqueue(1);
enqueue(2);
enqueue(3);
enqueue(4);
enqueue(5);

console.log("Before dequeueing", stack1);

dequeue();
dequeue();
dequeue();

console.log("After dequeue Stack 1 :", stack1);

console.log("After dequeue Stack 2 :", stack2);
