// Rotate Linkedlist

const { Linkedlist } = require("./Mod/linkedlist");

const linkedlist = new Linkedlist();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.add(4);
linkedlist.add(5);
linkedlist.add(6);
linkedlist.add(7);
linkedlist.add(8);

const swapHead = (linkedlist) => {
  const newTail = linkedlist.head; // Storing the prev head
  // Changing the head to the next element
  linkedlist.head = linkedlist.head.next;
  linkedlist.head.prev = null;
  // Changing the head to the prev head
  linkedlist.tail.next = newTail;
  newTail.next = null;
  linkedlist.tail = newTail;
};

const rotateLinkedlist = (n = 0) => {
  while (n) {
    swapHead(linkedlist);
    n--;
  }
};

rotateLinkedlist(4);
console.log(linkedlist.print());
