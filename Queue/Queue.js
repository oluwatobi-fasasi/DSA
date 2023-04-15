class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    get(){
        return this.first;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = this.first
        }
        else{
            const currentLast = this.last;
            currentLast.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(){
        if(!this.last){
            return -1;
        }
        if(this.first === this.last){
            this.last = null;
        }
        const currentFirst = this.first;
        this.first = currentFirst.next
        this.length--;
        return currentFirst.value;
    }
    
}

const newQueue = new Queue();
newQueue.enqueue(3);
newQueue.enqueue(5);
console.log(newQueue.dequeue());
newQueue.enqueue(2);
newQueue.enqueue(7);
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
console.log(newQueue.dequeue());
