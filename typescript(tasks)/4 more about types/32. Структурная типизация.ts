// https://code-basics.com/ru/languages/typescript/lessons/structural-typing

// BEGIN (write your solution here)
enum LoadingStatus {
    Loading,
    Success,
    Error,
}

type DataState = {
    status: LoadingStatus | string,
    error?: Error,
    data?: number,
}

function handleData(data: DataState): string {
    switch (data.status) {
        case LoadingStatus.Loading:
            return "loading...";
        case LoadingStatus.Success:
            if (data.data !== null && data.data !== undefined) return data.data.toString();
            break;
        case LoadingStatus.Error:
            return "error";
    }
    return "unknown";
}

// END

export {DataState, LoadingStatus};
export default handleData;
