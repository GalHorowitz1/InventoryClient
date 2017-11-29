import {Component, OnInit} from '@angular/core';
import {MyLinkedList, MyQueue, MyStack} from "./myStructures";

@Component({
  selector: 'app-data-structures',
  templateUrl: './data-structures.component.html',
  styleUrls: ['./data-structures.component.scss']
})
export class DataStructuresComponent implements OnInit {
  public peekValue: number;
  // stack
  public stack = new MyStack();
  // queue
  public queue = new MyQueue();
  // linked list
  public linkList = new MyLinkedList();
  public linkListInput = '';
  public listDisplay = [];

  constructor() {
  }

  ngOnInit() {
  }

  stackPeek() {
    this.peekValue = this.stack.peek();
  }

  queuePeek() {
    this.peekValue = this.queue.peek();
  }

//*********** linked list functions ***********//

  LLRandom() {
    for (let i = 0; i < 15; i++) {
      this.linkListInput = i + '';
      this.LLadd();
    }
  }

  LLadd() {
    if (this.linkListInput.length > 0) {
      this.linkList.addNode(this.linkListInput);
      this.LLRefresh();
    }
  }

  LLremoveFirst() {
    this.linkList.removeFirst();
    this.LLRefresh();
  }

  LLsearch() {
    if (this.linkListInput.length > 0) {
      this.listDisplay = this.linkList.search(this.linkListInput);
    }
  }


  LLremove() {
    if (this.linkListInput.length > 0) {
      this.linkList.remove(this.linkListInput);
      this.LLRefresh();
    }
  }

  LLRefresh() {
    this.linkListInput = '';
    this.listDisplay = this.linkList.display();
  }
}
