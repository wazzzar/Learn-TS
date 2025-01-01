// https://code-basics.com/ru/languages/typescript/lessons/static-property

// BEGIN (write your solution here)
class UserResponse {
    constructor(public user: string) {
    }

    static fromArray(users: string[]): UserResponse[] {
        let result: UserResponse[] = [];
        for (let i = 0; i < users.length; i++) {
            result.push(new UserResponse(users[i]));
        }
        return result;
    }
}

// END

export default UserResponse;
