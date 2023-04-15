class Queue{
    constructor(){
        this.array1 = [];
        this.array2 = [];
    }

    enqueue(value){
        this.array1.push(value);
    }

    dequeue(value){
        if(!this.array2.length){
            while(this.array1.length){
                this.array2.push(this.array1.pop());
            }
        }
        return this.array2.pop();
    }

    isEmpty(){
        return !this.array1.length && !this.array2.length;
    }
}