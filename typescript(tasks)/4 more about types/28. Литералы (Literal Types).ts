// https://code-basics.com/ru/languages/typescript/lessons/literal-types

type Turtle = 'turtle' | null;

type Game = {
    makeTurn: (direction: 'left' | 'right') => void;
    state: Array<Turtle>;
};

const startGame = (): Game => {
    const state: Array<Turtle> = ['turtle', null, null, null, null];

    // BEGIN (write your solution here)
    function makeTurn(direction: 'left' | 'right') {
        let position = state.indexOf('turtle');
        if (
            (direction === 'left' && position === 0) ||
            (direction === 'right' && position === state.length - 1)
        ) {
            throw Error('ERROR');
        }
        state[position] = null;
        state[position + (direction === 'left' ? -1 : 1)] = 'turtle';
    }

    // END

    return {makeTurn, state};
};

export default startGame;
