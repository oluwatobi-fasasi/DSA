class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    get(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const currentTopNode = this.top;
            this.top = newNode;
            newNode.next = currentTopNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.top){
            return null
        }
        if(this.top === this.bottom){
            this.bottom = null
        }
        const currentTopNode = this.top;
        this.top = this.top.next;
        this.length--;
        return currentTopNode.value;
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
