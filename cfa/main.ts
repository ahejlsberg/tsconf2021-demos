
// https://github.com/microsoft/TypeScript/issues/12184

//#region Simple narrowing

function foo(arg: unknown) {
    if (typeof arg === "string") {
        // We know 'arg' is a string now.
        console.log(arg.toUpperCase());
    }
}

//#endregion

//#region Narrowing discriminated union

type Shape =
    | { kind: "circle", radius: number }
    | { kind: "square", sideLength: number };

function area(shape: Shape): number {
    if (shape.kind === "circle") {
        // We know we have a circle here!
        return Math.PI * shape.radius ** 2;
    }
    else {
        // We know we're left with a square here!
        return shape.sideLength ** 2;
    }
}

//#endregion

//#region Extracting discriminant

function area2(shape: Shape): number {
    if (shape.kind === "circle") {
        // We know we have a circle here!
        return Math.PI * shape.radius ** 2;
    }
    else {
        // We know we're left with a square here!
        return shape.sideLength ** 2;
    }
}

//#endregion

//#region Composite checks

function f(x: string | number | boolean) {
    const isString = typeof x === "string";
    const isNumber = typeof x === "number";
    const isStringOrNumber = isString || isNumber;
    if (isStringOrNumber) {
        x;  // Type of 'x' is 'string | number'.
    }
    else {
        x;  // Type of 'x' is 'boolean'.
    }
}

//#endregion
