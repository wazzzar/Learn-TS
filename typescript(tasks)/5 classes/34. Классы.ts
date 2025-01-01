// https://code-basics.com/ru/languages/typescript/lessons/class-fields

// BEGIN (write your solution here)
class CustomFile {
    name: string;
    size: number;

    constructor(obj: { name: string; size: number }) {
        this.name = obj.name;
        this.size = obj.size;
    }

    toString(): string {
        return `${this.name} (${this.size} bytes)`;
    }
}

// END

export default CustomFile;
