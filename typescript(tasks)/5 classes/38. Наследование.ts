// https://code-basics.com/ru/languages/typescript/lessons/class-extending

/* eslint-disable max-classes-per-file */

// BEGIN (write your solution here)
class HttpError extends Error {
    constructor(public status: number, public message: string) {
        super(message);
    }
}

class NotFoundError extends HttpError {
    constructor(public message: string, public status: number = 404) {
        super(status, message);
    }
}

class UnauthorizedError extends HttpError {
    constructor(public message: string, public status: number = 401) {
        super(status, message);
    }
}

class ForbiddenError extends HttpError {
    constructor(public message: string, public status: number = 403) {
        super(status, message);
    }
}

// END

export {
    HttpError,
    NotFoundError,
    UnauthorizedError,
    ForbiddenError,
};
