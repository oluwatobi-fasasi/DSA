class Stack{
    constructor(){
        this.array = [];
    }

    get(){
        return this.array[this.array.length-1];
    }

    push(value){
        this.array.push(value);
        return this;
    }

    pop(){
        const deletedValue = this.array.pop()
        return deletedValue;
    }
}

const newStack = new Stack();
newStack.push(3);
newStack.push(5);
console.log(newStack.pop());
newStack.push(2);
newStack.push(7);
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
