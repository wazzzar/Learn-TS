// https://code-basics.com/ru/languages/typescript/lessons/enums

// BEGIN (write your solution here)
enum ModalStatus {
    Opened, Closed
}

function buildModal(text: string, status: ModalStatus): object {
    return {text, status};
}

// END

export {ModalStatus};
export default buildModal;
