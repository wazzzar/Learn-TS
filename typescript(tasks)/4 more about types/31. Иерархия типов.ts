// https://code-basics.com/ru/languages/typescript/lessons/type-hierarcy

type User = {
    id: number,
    name: string,
    age: number,
};

type Friends = [number, number];

export type UserResponse = {
    users: User[],
    friends: Friends[]
};

// BEGIN (write your solution here)
function getUser(users: User[], userId: number): User | null {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === userId) {
            return users[i];
        }
    }
    return null;
}

function getUserFriends(json: string, userId: number): User[] {
    let data: UserResponse = JSON.parse(json);
    let friends: User[] = [];

    let user = getUser(data.users, userId);
    if (!user) {
        return friends;
    }

    for (let j = 0; j < data.friends.length; j++) {
        let pair: number[] = data.friends[j];
        let idx = pair.indexOf(userId);
        if (idx > -1) {
            pair.splice(idx, 1);
            let id = pair.pop();
            if (id) {
                let friend = getUser(data.users, id);
                friend ? friends.push(friend) : 0;
            }
        }
    }
    return friends;
}

// END

export default getUserFriends;
