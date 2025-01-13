// https://code-basics.com/ru/languages/typescript/lessons/record

// BEGIN (write your solution here)
const createAccessChecker = <T extends string, U extends string>(permissions: Record<T, Array<U>>): Function => {
    return function (role: string, resource: string): boolean {
        const resources = permissions[role as T];
        return resources !== undefined && resources.includes(resource as U);
    };
}

// END

export default createAccessChecker;
