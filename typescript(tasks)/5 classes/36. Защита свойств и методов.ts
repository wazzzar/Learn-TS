// https://code-basics.com/ru/languages/typescript/lessons/members-visibility

/* eslint-disable max-classes-per-file */

type CustomFileOptions = {
    name: string;
    size: number;
};

class CustomFile {
    private name: string;

    private size: number;

    constructor(options: CustomFileOptions) {
        this.name = options.name;
        this.size = options.size;
    }

    protected toString() {
        return `${this.name} (${this.size} bytes)`;
    }
}

// BEGIN (write your solution here)
type CustomFileImageOptions = CustomFileOptions & {
    width: number;
    height: number;
};

class ImageCustomFile extends CustomFile {
    private width: number;
    private height: number;

    constructor(options: CustomFileImageOptions) {
        super({name: options.name, size: options.size});
        this.width = options.width;
        this.height = options.height;
    }

    protected toString(): string {
        return super.toString() + ` ${this.width}x${this.height}`;
    }
}

// END

export default ImageCustomFile;
