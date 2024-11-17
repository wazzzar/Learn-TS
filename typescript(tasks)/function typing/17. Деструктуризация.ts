// https://code-basics.com/ru/languages/typescript/lessons/destructuring

// BEGIN (write your solution here)
type Course = { lessons: string[] };

function lessonsCount({lessons}: Course): number {
    return lessons != undefined ? lessons.length : 0;
}

// END

export default lessonsCount;
