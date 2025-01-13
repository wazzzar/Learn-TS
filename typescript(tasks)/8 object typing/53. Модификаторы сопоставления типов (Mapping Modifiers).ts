// https://code-basics.com/ru/languages/typescript/lessons/mapping-modifiers

// BEGIN (write your solution here)
type Freezed<T extends object> = {
    readonly [K in keyof T]: T[K] extends object ? Freezed<T[K]> : T[K];
}

function deepFreeze<T extends object, K extends keyof T>(obj: T): T {
    const freezed = Object.freeze(obj);
    for (const key in freezed) {
        let prop = freezed[key];
        if (typeof prop === 'object' && prop !== null) {
            deepFreeze(prop);
        }
    }
    return freezed;
}

// END

export default deepFreeze;
