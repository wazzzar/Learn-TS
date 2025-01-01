// https://code-basics.com/ru/languages/typescript/lessons/class-as-types

// BEGIN (write your solution here)
class CustomFile {
    name: string;
    size: number;
    copy = false;

    constructor(obj: { name: string, size: number } | CustomFile) {
        if (obj instanceof CustomFile) {
            this.copy = true;
        }
        this.name = obj.name;
        this.size = obj.size;
    }

    toString(): string {
        return (this.copy ? '(copy) ' : '') + `${this.name} (${this.size} bytes)`;
    }
}

// END

export default CustomFile;
