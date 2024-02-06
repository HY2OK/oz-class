class GenericQueue<T> {
  #items: T[] = []

  // enqueue
  enqueue(item: T): void {
    this.#items.push(item)
  }

  // dequeue
  dequeue(): T | undefined {
    return this.#items.shift()
  }

  // peak
  peak(): T | undefined {
    return this.#items[0]
  }

  // size
  size(): number {
    return this.#items.length
  }
}

const strQ = new GenericQueue<string>()

strQ.enqueue('helo')
console.log(strQ.peak())
strQ.dequeue()
strQ.enqueue('type')
console.log(strQ.size())
console.log(strQ.peak())
