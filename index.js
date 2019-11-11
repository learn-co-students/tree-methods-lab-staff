function inOrder(currentNode) {
  if (currentNode.left) {
    inOrder(currentNode.left);
  }
  if (currentNode.right) {
    inOrder(currentNode.right);
  }
  console.log(currentNode.data);
}

function findOrAdd(currentNode, newNode) {
  if (currentNode.data === newNode.data) {
    return true;
  }
  if (newNode.data < currentNode.data) {
    if (currentNode.left) {
      return findOrAdd(currentNode.left, newNode);
    } else {
      return (currentNode.left = newNode);
    }
  }
  if (newNode.data > currentNode.data) {
    if (currentNode.right) {
      return findOrAdd(currentNode.right, newNode);
    } else {
      return (currentNode.right = newNode);
    }
  }
}

function max(currentNode) {
  if (currentNode.right) {
    return max(currentNode.right);
  } else {
    return currentNode;
  }
}

function min(currentNode) {
  if (currentNode.left) {
    return max(currentNode.left);
  } else {
    return currentNode;
  }
}
