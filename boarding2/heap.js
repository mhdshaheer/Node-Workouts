class MinHeap {
  constructor() {
    this.heap = [];
  }
  getParantIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftIndex(index) {
    return 2 * index + 1;
  }
  getRightIndex(index) {
    return 2 * index + 2;
  }
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
  insert(value) {
    this.heap.push(value);
    this.heapify();
  }
  heapify() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parantIndex = this.getParantIndex(index);
      if (this.heap[parantIndex] > this.heap[index]) {
        this.swap(parantIndex, index);
        index = parantIndex;
      } else {
        break;
      }
    }
  }
  extractMin() {
    if (this.heap.length == 0) return null;
    if (this.heap.length == 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }
  heapifyDown() {
    let index = 0;
    while (true) {
      let smallest = index;
      let left = this.getLeftIndex(index);
      let right = this.getRightIndex(index);

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest == index) break;
      this.swap(smallest, index);
      index = smallest;
    }
  }
}
