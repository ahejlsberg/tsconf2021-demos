
// https://github.com/microsoft/TypeScript/issues/13995

declare function takeString(s: string): void;

function foo<T extends string | undefined>(x: T): string {
    if (x) {
        let t: T = x;
        x.length;
        takeString(x);
        return x;
    }
    return '';
}
