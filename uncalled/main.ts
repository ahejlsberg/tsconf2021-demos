
//#region Uncalled function check

declare function shouldDisplay(): boolean;

function displayItems(items: string[]) {
    if (shouldDisplay) {
        // ...
    }
}

//#endregion

//#region Unawaited promise check

declare function shouldDisplayAsync(): Promise<boolean>;

async function displayItemsAsync(items: string[]) {
    if (shouldDisplayAsync) {
        // ...
    }
}

//#endregion
