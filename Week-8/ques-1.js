// Reverse a Linkedlist

const { Linkedlist } = require("./Mod/linkedlist");

const linkedlist = new Linkedlist();

linkedlist.add(10);
linkedlist.add(20);
linkedlist.add(30);
linkedlist.add(40);
linkedlist.add(50);
linkedlist.add(60);
// console.log(linkedlist);
// console.log(linkedlist.print());

const reverseNode = (node) => {
  const prev = node.prev;
  node.prev = node.next;
  node.next = prev;
};
const reverseLinkedlist = (linkedlist) => {
  linkedlist.loop(linkedlist.head, reverseNode, "prev");
  const tail = linkedlist.tail;
  linkedlist.tail = linkedlist.head;
  linkedlist.head = tail;
};

reverseLinkedlist(linkedlist);
console.log(linkedlist.print());
