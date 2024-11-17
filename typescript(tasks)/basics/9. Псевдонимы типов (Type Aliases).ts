// https://code-basics.com/ru/languages/typescript/lessons/type-aliases

// BEGIN (write your solution here)
type User = {
    name: string, age: number
}

function getOlderUser(user1: User, user2: User): User | null {
    return user1.age == user2.age ? null : (user1.age > user2.age ? user1 : user2);
}

// END

export type {User};
export default getOlderUser;
