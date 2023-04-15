class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Mll{
    constructor(value){
        this.head={
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.l = 1;
    }


    append(value){
        const nN = new Node(value)
        nN.prev = this.tail;
        this.tail.next = nN;
        this.tail = nN;
        this.l++;
        return this.printList()
    }

    prepend(value){
        const nN = new Node(value)
        nN.next = this.head;
        this.head.prev = nN;
        this.head = nN;
        this.l++
        return this.printList()
    }

    printList(){
        const listArray = [];
        let currentNode = this.head;
        while(currentNode != null){
            listArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return listArray;
    }

    traversing(index){
        let counter = 0;
        let currentNode = this.head;
        while (counter != index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    insert(index, value){
        if(index >= this.l){
            return this.append(value);
        }
        const nN = new Node(value);
        const nodeBefore = this.traversing(index-1);
        const nodeAfter = nodeBefore.next;
        nodeBefore.next = nN;
        nN.prev = nodeBefore;
        nN.next = nodeAfter;
        nodeAfter.prev = nN
        this.l++
        return this.printList()
    }
    
    remove(index){
        const nodeBefore = this.traversing(index-1);
        const unWantedNode = nodeBefore.next;
        nodeBefore.next = unWantedNode.next;
        this.l--;
        return this.printList();
    }
}


const newL = new Mll(10);
newL.append(5);
newL.append(16);
newL.prepend(4);
newL.prepend(9);
// console.log(newL);
// newL.insert(2, 100);
// newL.remove(2);
// newL.remove(2);
console.log(newL);