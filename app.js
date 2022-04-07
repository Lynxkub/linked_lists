class Node {
    constructor(val) {
        this.val=val;
        this.next=null
    }
}

class LinkedList {
    constructor(vals = []) {
        this.head=null;
        this.tail=null;
        this.length=0;

        for(let val of vals) this.push(val);
    }

    push(val) {
       let newNode = new Node(val);
       if(!this.head) {
           this.head = newNode;
       }
       if(this.tail !== null) {
           this.tail.next = newNode
       }
       this.tail = newNode;
    }

    unshift(val) {
        let newNode = new Node(val);
       if(this.head) {
           newNode.next = this.head;
           this.head = newNode
       }else {
           this.head = newNode;
           this.tail = newNode;
       }

    }

    shift() {
        if(!this.head) {
            this.head = null;
            this.tail = null;
        }
        this.head = this.head.next;
    }

    pop() {
        let currNode = this.head;
        if(!currNode) {
            return (Error('List is empty'))
        }
        while(currNode.next.next != null) {
            currNode = currNode.next
        }
        this.tail = currNode;
        currNode.next = null;
    }

    getAt(idx) {
        let currNode = this.head;
        if(!currNode) {
            return (Error('List is empty'))
        }
        let count = 0
        while(count < idx) {
            if(currNode.tail === null) {
                return (Error('Invalid Index'))
            }
            currNode = currNode.next
            count ++
        }
        if(currNode) {
        return currNode
        }
        else{
            return (Error('Invalid Index'))
        }
    }

    setAt(idx , val) {
        let currNode = this.head;
        if(!currNode) {
            return (Error('List is empty'))
        }
        let count = 0;
        while(count < idx) {
            currNode = currNode.next;
            count ++
        }
        if(currNode) {
            currNode.val = val;
            return currNode
        }else {
            return (Error('Invalid Index'))
        }
    }

    insertAt(idx , val) {
        let currNode = this.head;
        if(!currNode) {
            return (Error('List is empty'))
        }
        let count = 0;
        while(count < idx - 1) {    
            currNode = currNode.next;
            if(!currNode){
                return(Error('Invalid Index'));
            }
            count++;
        }
        let newNode = new Node(val)
        let nextNode = this.getAt(idx);
        
        currNode.next = newNode
        
        newNode.next = nextNode
    }

    removeAt(idx) {
        let currNode = this.head;
        if(!currNode) {
            return (Error('List is empty'))
        }
        let count=0;
        while(count < idx - 1){
            currNode = currNode.next;
            if(!currNode) {
                return(Error('Invalid Index'));
            }
            count++
        }
        let nextNode = this.getAt(idx + 1)
        currNode.next = nextNode
    }

    average() {
        let currNode = this.head;
        if(!currNode) {
            return (Error('List is empty'))
        }
        if(typeof(currNode) !== Number) {
            return (Error('This method is only usable on a list that contains only numbers'))
        }
        let count = 0;
        let indexCount = 0
        while(true) {
            indexCount++;
            count += currNode.val;
            currNode = currNode.next
            if(typeof(currNode) !== Number) {
                return(Error('This method is only usable on a list that contains only numbers'))
            }
            if(!currNode){
                break;
            }
        }
        return count/indexCount;
    }
}

