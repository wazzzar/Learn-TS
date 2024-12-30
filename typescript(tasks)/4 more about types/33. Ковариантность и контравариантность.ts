// https://code-basics.com/ru/languages/typescript/lessons/variability

// BEGIN (write your solution here)
type Transaction = {
    apply: (amount: number) => number,
}

type Wallet = {
    transactions: Transaction[],
    balance: number,
}

function applyTransactions(w: Wallet): number {
    let init = w.balance;
    let total = w.balance;
    for (let i = 0; i < w.transactions.length; i++) {
        try {
            total = w.transactions[i].apply(total);
        } catch (e) {
            return init;
        }
    }
    return total;
}

// END

export type {Transaction, Wallet};
export default applyTransactions;
