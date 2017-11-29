export class MyStack {
  public stack: Array<number>;
  public head: number;

  constructor() {
    this.stack = new Array();
    this.head = -1;

  }

  pop(): number {
    if (this.head > -1) {
      const ans: number = this.stack[this.head];
      this.stack[this.head--] = -1;
      return ans;
    } else {
      return -1;
    }
  }

  pushRandomNumber() {
    const number = Math.floor(Math.random() * 10) + 1
    this.stack[++this.head] = number;
  }

  peek(): number {
    if (this.head > -1) {
      return this.stack[this.head];
    } else {
      return -1;
    }
  }
}

/** *********************************************************/


export class MyQueue {
  public queue: Array<number>;
  public start: number;
  public end: number;
  public counterItems: number;

  constructor() {
    this.queue = new Array();
    this.start = 0;
    this.end = 0;
    this.counterItems = 0;
  }

  remove(): number {
    if (this.counterItems > 0) {
      const ans: number = this.queue[this.start];
      this.queue[this.start++] = -1;
      this.counterItems--;
      return ans;
    } else {
      return -1;
    }
  }

  insertRandomNumber() {
    const number = Math.floor(Math.random() * 10) + 1
    this.queue[this.end++] = number;
    this.counterItems++;
  }

  peek(): number {
    if (this.counterItems > -1) {
      return this.queue[this.start];
    } else {
      return -1;
    }
  }
}

/** *********************************************************/

class Node {
  public data: string;
  public next: Node;

  constructor(data: string, next: Node = null) {
    this.data = data;
    this.next = next;
  }

  public toString() {
    return this.data;
  }
}

export class MyLinkedList {
  public firstNode: Node;
  public size: number;

  constructor() {
    this.firstNode = null;
    this.size = 0;
  }

  public isEmpty(): boolean {
    return this.firstNode === null;
  }

  public addNode(data) {
    const newNode = new Node(data, this.firstNode);
    this.firstNode = newNode;
    this.size++;
  }

  public removeFirst(): Node {
    const remove: Node = this.firstNode;
    if (!this.isEmpty()) {
      this.firstNode = this.firstNode.next;
      this.size--;
    } else {
      console.log('list is empty');
    }
    return remove;
  }

  public display(): Array<string> {
    let tempNode = this.firstNode;
    let ans: Array<string> = [];

    while (tempNode !== null) {
      ans.push(tempNode.toString());
      tempNode = tempNode.next;
    }
    return ans;
  }

  public search(data: string): Array<string> {
    let tempNode = this.firstNode;
    let ans: Array<string> = [];

    while (tempNode !== null && !this.isEmpty()) {
      if (tempNode.data === data) {
        ans.push(' >> ');
        ans.push(tempNode.toString());
        ans.push(' << ');
        tempNode = null;
      } else {
        ans.push(tempNode.toString());
        tempNode = tempNode.next;
      }
    }
    return ans;
  }

  public remove(data: string) {
    let currentNode = this.firstNode.next;
    let prevNode = this.firstNode;

    if (this.firstNode.data === data) {
      this.removeFirst();
      return this.firstNode;
    }


    while (currentNode !== null) {
      if (currentNode.data === data) {
        prevNode.next = currentNode.next;
        return currentNode;
      } else {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }

    return null;
  }
}
