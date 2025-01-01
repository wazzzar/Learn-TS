// https://code-basics.com/ru/languages/typescript/lessons/parameter-properties

// BEGIN (write your solution here)
class CustomFile {
    constructor(public name: string, public size: number) {
    }

    toString(): string {
        return `${this.name} (${this.size} bytes)`;
    }
}

// END

export default CustomFile;
