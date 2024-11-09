const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

// BEGIN (write your solution here)
function getEvenNumbers(): number[] {
    let arr: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) arr.push(numbers[i]);
    }
    return arr;
}

// END

export default getEvenNumbers;
