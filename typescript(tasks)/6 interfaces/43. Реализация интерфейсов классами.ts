// https://code-basics.com/ru/languages/typescript/lessons/interface-implementation

type Entry = {
    [key: string]: number
};

interface IPhonebook {
    get(key: string): number | null

    set(key: string, value: number): void
}

// BEGIN (write your solution here)
class Phonebook implements IPhonebook {
    readonly entries: Entry = {};

    get(key: string): number | null {
        return this.entries[key] ?? null;
    }

    set(key: string, value: number): void {
        if (!this.get(key)) {
            this.entries[key] = value;
        }
    }
}

// END

export default Phonebook;
