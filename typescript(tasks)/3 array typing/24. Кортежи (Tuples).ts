// https://code-basics.com/ru/languages/typescript/lessons/tuples

// BEGIN (write your solution here)
type Point = [number, number, number];

function isTheSamePoint(first: Point, second: Point): boolean {
    return first[0] === second[0] && first[1] === second[1] && first[2] === second[2];
}

// END

export default isTheSamePoint;
