class Node{
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;
    }
}
export class LinkedList{
    head = null;
    tail = null;
    append(value){
        const node = new Node(value);
        this.tail = node;
        if(this.head === null){
            return this.head = node;
        } else {
            let temp = this.head;
            while(temp.nextNode !== null){
                temp = temp.nextNode;
            }
            temp.nextNode = node;
        }
    }
    prepend(value){
        const node = new Node(value);
        let temp = this.head;
        if(temp === null){
            temp = node;
            this.tail = node;
        } else {
            const next = temp;
            node.nextNode = next;
            this.head = node;
        }
    }
    size(){
        let count = 0;
        let temp = this.head;
        while(temp !== null){
            count++;
            temp = temp.nextNode;
        }
        return count;
    }
    Head(){
        let temp = this.head;
        if(temp === null){
            return undefined;
        } else {
            return temp.value;
        }
    }
    Tail(){
        let temp = this.tail;
        if(temp === null){
            return undefined;
        } else {
            return temp.value;
        }
    }
    at(index){
        let targetIndex = 0;
        let temp = this.head;
        while(temp !== null){
            if(targetIndex === index){
                return temp.value;
            }
            targetIndex++;
            temp = temp.nextNode;
        }
        return temp.value;
    }
    keys(){
        let keys = [];
        let temp = this.head;
        while(temp !== null){
            keys.push(Object.keys(temp.value));
            temp = temp.nextNode;
        }
        return keys;
    }
    values(){
        let values = [];
        let temp = this.head;
        while(temp !== null){
            values.push(Object.values(temp.value));
            temp = temp.nextNode;
        }
        return values;
    }
    keyValuePairs(){
        let keyValuePairs = [];
        let temp = this.head;
        while(temp !== null){
            keyValuePairs.push(temp.value);
            temp = temp.nextNode;
        }
        return keyValuePairs;
    }
    pop(){
        let temp = this.head;
        if(temp === null){
            return undefined;
        } else {
            const first = temp.nextNode;
            this.head = first;
        }
    }
    contains(targetValue){
        let temp = this.head;
        while(temp !== null){
            const keys = Object.keys(temp.value);
            if(keys.includes(targetValue)){
                return true;
            } else {
                temp = temp.nextNode
            }
        }
        return false;
    }
    findIndex(targetValue){
        let targetIndex = 0;
        let temp = this.head;
        while(temp !== null){
            const keys = Object.keys(temp.value);
            if(keys.includes(targetValue)){
                return targetIndex;
            }
            temp = temp.nextNode;
            targetIndex++
        }
        return -1;
    }
    toString(){
        let temp = this.head;
        let string = '';
        if(temp === null){
            return string;
        }
        while(temp !== null){
            if(temp.nextNode === null){
                string = string + `( ${temp.value} ) -> ${temp.nextNode}`;
            } else {
                string = string + `( ${temp.value} ) -> `;
            }
            temp = temp.nextNode;
        }
        return string;
    }
    insertAt(index, values){
        let targetIndex = 0;
        let temp = this.head;
    
        while(temp !== null){
            if(targetIndex === index){
                temp.value = values;
                return;
            }
            temp = temp.nextNode;
            targetIndex++;
        }
        throw RangeError('Index is invalid');
    }

    // need to fix this method in linked list project too
    removeAt(index){
        let targetIndex = 0;
        let temp = this.head;
        while(temp !== null){
            if(targetIndex === index){
                if(temp.nextNode === null){
                    this.head = null;
                    this.tail = null;
                    return;
                }
                const next = temp.nextNode.nextNode;
                temp.nextNode = next;
                return;
            }
            temp = temp.nextNode;
            targetIndex++;
        }
        throw RangeError('Index is invalid');
    }
}