### Conceptual Exercise

Answer the following questions below:

- What is Big O Notation?
  Big O Notation is a measure of how time or space grow in relation to input.
  It is used to estimate the worst possible case for each situation.

- What is the call stack?

  The call stack is a stack data structure that holds function context in Javascript. It is last in first off.

- What is the difference between time and space complexity?

  Time refers to the amount of time it takes for a function to complete in relation to it's input size.
  Size deals with memory and efficiency of that memory as it is used.

- What are some advantages/disadvantages to using Linked Lists versus arrays?

  Linked Lists are great if you want to add/delete as the time to add/delete in LL is O(1).

  Arrays are better for searching, but not so great for insertion and deletion if you are adding/deleting anywhere other than the end. Arrays also have indices which make for easy random access.

- What is the difference between a tree and a graph?

  Trees have a single root, and each child may only have a single parent.
  Graphs are similar but have less rules; a child may have many parents, and a parent may have many children. There is not a root system.

- What is the difference between a binary search tree and binary tree?

  Binary tree can have at most 2 children, named left and right, and they inherit the root characteristic from a basic tree.

 Binary Search tree is the same as above however each child node must follow this pattern, smaller children are assigned left and larger are assigned right. There cannot be duplicate nodes.

- What are some examples of where graphs are used?

  Social networks, paths in a city, telephone networks.

- What are some examples of where trees are used?
  Anything containing some sort of hierarchy, so for example our file system in our computers, or animal classification.

- What are some examples of where linked lists are used?

  They can be used well with linear data, such as forward and back history markers in our browsers. They are also the building blocks for other many other data structures. Next and previous image viewers, song selection with the next and back buttons.

- What is a stack? Where and how are they used?

  A stack is a linear data structure that rules state that there must a top, where we can push and pop items off. It is a LIFO structure.
  They are used in the call stack, to-do lists(well my todo-lists, I usually add something easy and delete it first for quick gains, then work on the harder stuff last.). Redo-Undo features. Games that use checkpoints.

- What is a queue? Where and how are they used?
  Queues are similar to stacks, and are comprised of nodes in the form of a linked list. The rule set is slightly different in the sense that they can be added to at one end, (enqueue), and deleted from another end( dequeue ). These can be referred to as head/tail or front/back.

- What is an adjacency list?

  An adjacency list holds values at are related to a node (usually in a set or an array).

- Explain how hash tables work



- What happens if two values hash to the same index?

A collision occurs, and they are both held in the index. This isn't a huge problem, and won't break, but generally we want to fill all of our space before we start storing additional values in memory slots together.

- What is a heap? What are they good for?

- What is topological sort? What is it useful for?

- Why is the best possible runtime for comparative sorting `O(N * log(N))`?
