
//#region Leading and middle rest elements

type T0 = [number, ...string[]];  // Number followed by zero or more strings
type T1 = [...string[], number];  // Zero or more strings followed by number
type T2 = [number, ...boolean[], string, string];  // Number followed by zero or more booleans followed by two strings

//#endregion

//#region Strongly typed last parameters

function foo(...args: [...string[], number]) {
    const strs = args.slice(0, -1) as string[];
    const num = args[args.length - 1] as number;
    // ...
}

foo(5);
foo('abc', 5);
foo('abc', 'def', 5);
foo('abc', 'def', 5, 6);  // Error

//#endregion

//#region Generic last parameters

declare function curryLast<T extends unknown[], U, V>(f: (...args: [...T, U]) => V, last: U): (...args: T) => V;

declare function f3(s: string, n: number, b: boolean): string[];

const f2 = curryLast(f3, true);

//#endregion
