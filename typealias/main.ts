
//#region Type alias preservation

type Shape =
  | { kind: "circle", radius: number }
  | { kind: "square", size: number }
  | { kind: "rectangle", width: number, height: number };

type Named = { name: string };

let shape: Shape;

let optionalShape: Shape | undefined;

let namedShape: Shape & Named;

let optionalNamedShape: (Shape & Named) | undefined;

//#endregion

//#region Re-aliasing of type alias instantiations

type Thing<T> = { value: T };
type ArrayThing<U> = Thing<U[]>;
type StringArrayThing = ArrayThing<string>;

declare let t1: Thing<string[]>;
declare let t2: ArrayThing<string>;
declare let t3: StringArrayThing;

function foo<T, K extends keyof T>(obj: T, key: K) {
    let x: Omit<T, K>;
}

//#endregion
