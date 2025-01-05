// https://code-basics.com/ru/languages/typescript/lessons/generic-classes

// BEGIN (write your solution here)
class Queue<T> {
    items: T[] = [];

    enqueue(value: T): void {
        this.items.push(value);
    }

    dequeue(): T | undefined {
        if (this.items.length) return this.items.shift();
        else throw new Error('Queue is empty');
    }
}

// END

export default Queue;
