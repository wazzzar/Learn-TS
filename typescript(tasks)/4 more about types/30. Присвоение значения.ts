// https://code-basics.com/ru/languages/typescript/lessons/assignability

type Form = {
    age: {
        value: number,
        validator: (val: number) => boolean
    },
    name: {
        value: string,
        validator: (val: string) => boolean
    }
};

const form: Form = {
    // BEGIN (write your solution here)
    age: {
        value: 38,
        validator: (val: number) => false
    },
    name: {
        value: 'Dmitriy',
        validator: (val: string) => true
    }
    // END
};

export default form;
