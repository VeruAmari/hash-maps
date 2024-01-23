const linkedList = () => {
  // Keep track of head and tail of list
  let head = null;
  let tail = null;

  // List item data structure
  const node = () => {
    // Node data structure
    let value = null;
    let nextNode = null;
    return { value, nextNode };
  };

  // Methods
  const append = (value) => {
    // Creates a new node of value value and sets it as tail
    console.log(`Attaching new item of value ${value} to end of the list.`);
    const newNode = node();
    newNode.value = value;

    if (!head) {
      head = newNode;
    }
    if (!tail) {
      tail = newNode;
    } else {
      tail.nextNode = newNode;
      tail = newNode;
    }
  };
  const prepend = (value) => {
    // Creates a new node of value value and sets it as head
    console.log(
      `Attaching new item of value ${value} to beginning of the list.`,
    );
    const newNode = node();
    newNode.value = value;

    if (!head) {
      head = newNode;
    }
    if (!tail) {
      tail = newNode;
    } else {
      newNode.nextNode = head;
      head = newNode;
    }
  };
  const headNode = () => {
    // Returns first item in the list
    console.log("Returning first item in list.");
    return head.value;
  };
  const tailNode = () => {
    // Returns last item in the list
    console.log("Returning last item in list.");
    return tail.value;
  };
  const size = () => {
    // Returns list item count
    console.log("Returning size of list.");
    let cursor = head;
    let nodes = 0;
    while (cursor) {
      nodes += 1;
      cursor = cursor.nextNode;
    }
    return nodes;
  };
  const at = (index) => {
    console.log("Returning list element at index ", index);
    let cursor = head;
    for (i = 0; i < index; i++) {
      cursor = cursor.nextNode;
    }
    return cursor;
  };
  const pop = () => {
    console.log("Removing last element in list.");
    if (!head) {
      console.log("No items to remove.");
      return;
    }
    let cursor = head;
    while (cursor.nextNode.nextNode) {
      // Traverse list till last node is nextNode
      cursor = cursor.nextNode;
    }
    if (!cursor.nextNode) {
      //
      head = null;
      tail = null;
      return;
    }
    cursor.nextNode = null;
    tail = cursor;
  };
  const contains = (value) => {
    console.log(`Searching for ${value} in list.`);
    let cursor = head;
    while (cursor.nextNode) {
      if (cursor.value === value) {
        console.log(`${value} found in list.`);
        return true;
      }
      console.log(`${value} not found in list.`);
      return false;
    }
  };
  const find = (value) => {
    console.log(`Finding idex of ${value} in list.`);
    let cursor = head;
    let index = 0;
    while (cursor) {
      if (cursor.value === value) {
        console.log(`${value} found at index ${index}`);
        return index;
      }
      index += 1;
      cursor = cursor.nextNode;
    }
    console.log(`${value} not found in list.`);
    return null;
  };
  const toString = () => {
    let cursor = head;
    let string = "";
    while (cursor) {
      string += `( ${cursor.value} ) -> `;
      cursor = cursor.nextNode;
    }
    string += cursor;
    return string;
  };
  const insertAt = (value, index) => {
    console.log(`Inserting ${value} at index ${index}`);
    let i = 0;
    if (index === 0) {
      prepend(value);
    } else {
      let cursor = head;
      // Traverse list to given index

      for (; i < index - 1; i++) {
        // If given index is bigger than items in list or list is empty, just run append and exit
        if (!cursor || !cursor.nextNode) {
          append(value);
          return;
        }
        cursor = cursor.nextNode;
      }
      i++;
      const newNode = node();
      newNode.value = value;
      newNode.nextNode = cursor.nextNode;
      cursor.nextNode = newNode;
    }
    console.log(`Inserted ${value} at index ${i}.`);
  };
  const removeAt = (index) => {
    let cursor = head;
    if (!cursor || !cursor.nextNode) {
      console.log(`No node found at index ${index}.`);
      return;
    }
    if (index === 0) {
      console.log(`Removing ${head.value} node.`);
      head = head.nextNode;
    } else {
      // Traverse list to given index
      for (let i = 0; i < index - 1; i++) {
        if (!cursor.nextNode.nextNode) {
          break;
        }
        cursor = cursor.nextNode;
      }
      console.log(`Removing node ${cursor.nextNode.value}`);
      if (cursor.nextNode === tail) {
        tail = cursor;
      }
      cursor.nextNode = cursor.nextNode.nextNode;
    }
  };
  return {
    append,
    prepend,
    headNode,
    tailNode,
    size,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

export default linkedList;
