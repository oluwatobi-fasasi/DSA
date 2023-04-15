class Node {
    constructor(value) {
        this.value = value;
        this.prev = null
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head
        this.length = 0
    }

    arrayVersion() {
        let arr = [];
        let currentNode = this.head;
        while (currentNode != null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next
        }
        console.log(arr, this.length);

    }

    append(value) {
        const newNode = new Node(value);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.length++;
            // return this;
        }

    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.length++;
            // return this;
        }

    }

    travesing(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter != index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        } else if (index == 0) {
            return this.prepend(value);
        } else {
            const newNode = new Node(value);
            const nodeBeforeIndex = this.travesing(index - 1);
            const nodeAfterIndex = nodeBeforeIndex.next;
            newNode.next = nodeAfterIndex;
            newNode.prev = nodeBeforeIndex;
            nodeAfterIndex.prev = newNode;
            nodeBeforeIndex.next = newNode;
            this.length++;
            // return this;
        }

    }

    remove(index) {
        const unWantedNode = this.travesing(index);
        const nodeBeforeIndex = unWantedNode.prev;
        const nodeAfterIndex = unWantedNode.next;
        nodeBeforeIndex.next = nodeAfterIndex;
        nodeAfterIndex.prev = nodeBeforeIndex;
        this.length--;
        // return this;
    }
}



const newLinkedList = new LinkedList();
newLinkedList.append(20);
newLinkedList.append(50);
newLinkedList.prepend(5);
newLinkedList.prepend(500);
newLinkedList.insert(1, 50);
newLinkedList.remove(2);
newLinkedList.arrayVersion();
console.log(newLinkedList);