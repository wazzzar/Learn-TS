// BEGIN (write your solution here)
function isComplete(c: { name: string, lessons: string[] }): boolean {
    if (c.lessons == undefined) return false;
    return c.lessons.length > 3;
}
// END

export default isComplete;
