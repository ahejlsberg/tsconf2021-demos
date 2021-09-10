
//#region Template literal types

type EventName<T extends string> = `${T}Changed`;

type T0 = EventName<'foo'>;  // 'fooChanged'
type T1 = EventName<'foo' | 'bar' | 'baz'>;  // 'fooChanged' | 'barChanged' | 'bazChanged'

type T2 = `${'top' | 'middle' | 'bottom'}-${'left' | 'center' | 'right'}`;

type StringDashString = `${string}-${string}`;
type StringDashNumber = `${string}-${number}`;

let sds: StringDashString = 'hello-world';
let sdn: StringDashNumber = 'hello-42';

//#endregion

//#region Inference with recursive conditional types

type Trim<S extends string> =
    S extends ` ${infer T}` ? Trim<T> :
    S extends `${infer T} ` ? Trim<T> :
    S;

type T20 = Trim<'     hello   '>;
type T21 = Trim<' hello           '>;

//#endregion

//#region String formatting

type Placeholders<T extends string> =
    T extends `${string}{${infer P}}${infer R}` ? P | Placeholders<R> : never;

declare function format<S extends string>(template: S, args: Record<Placeholders<S>, unknown>): string;

let text = format('Name: {name}, Age: {age}', { name: 'Homer', age: 42 });

//#endregion

//#region Routing

type RouteParamName<T extends string> =
    string extends T ? string :
    T extends `${string}:${infer P}/${infer R}` ? P | RouteParamName<R> :
    T extends `${string}:${infer P}` ? P :
    never;

declare function handleGet<R extends string>(route: R, handler: (params: Record<RouteParamName<R>, string>) => void): void;

handleGet('/posts/:postId/:commentId', params => {
})

//#endregion

//#region Dotted paths

type PathKeys<T> =
    object extends T ? string :
    T extends readonly any[] ? Extract<keyof T, `${number}`> | SubKeys<T, Extract<keyof T, `${number}`>> :
    T extends object ? Extract<keyof T, string> | SubKeys<T, Extract<keyof T, string>> :
    never;

type SubKeys<T, K extends string> = K extends keyof T ? `${K}.${PathKeys<T[K]>}` : never;

type PropType<T, Path extends string> =
    Path extends keyof T ? T[Path] :
    Path extends `${infer K}.${infer R}` ? K extends keyof T ? PropType<T[K], R> : unknown :
    unknown;

declare function getProp<T, P extends PathKeys<T>>(obj: T, path: P): PropType<T, P>;

const obj = {
    name: 'John',
    age: 42,
    cars: [
        { make: 'Ford', age: 10 },
        { make: 'Trabant', age: 35 }
    ]
} as const;

let make = getProp(obj, 'cars.1.make');  // 'Trabant'

//#endregion

//#region Mapped type 'as' clauses

type OnPropChangedMethods<T> = {
    [P in keyof T & string as `${P}Changed`]: (cb: (newValue: T[P]) => void) => void
}

declare function makeWatchedObject<T>(obj: T): T & OnPropChangedMethods<T>;

let homer = makeWatchedObject({
    firstName: "Homer",
    age: 42,
    location: "Springfield",
});

//#endregion
