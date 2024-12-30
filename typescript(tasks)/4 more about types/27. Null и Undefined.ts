// https://code-basics.com/ru/languages/typescript/lessons/nullable

// BEGIN (write your solution here)
function formatPrice(n: number | null): string {
    if (n === undefined || n === null) {
        return '$0.00';
    } else {
        return '$' + n.toFixed(2);
    }
}

// END

export default formatPrice;
