// https://code-basics.com/ru/languages/typescript/lessons/index-signatures

interface SalaryStatistics {
    min: number;
    max: number;
    avg: number;
}

// BEGIN (write your solution here)
interface EmployeeSalary {
    [name: string]: number;
}

function buildSalaryStatistics(employees: EmployeeSalary): SalaryStatistics {
    let sorted = Object.values(employees).sort((a, b) => a - b);
    return {
        min: sorted[0],
        max: sorted[sorted.length - 1],
        avg: sorted.reduce((acc, num) => acc + num, 0) / sorted.length,
    };
}

// END

export {
    EmployeeSalary,
    buildSalaryStatistics,
};
