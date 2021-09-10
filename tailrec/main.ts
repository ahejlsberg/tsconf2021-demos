
type Trim<S extends string> =
    S extends ` ${infer T}` ? Trim<T> :
    S extends `${infer T} ` ? Trim<T> :
    S;

type T1 = Trim<' hello                                               '>;

type GetChars<S> =
    S extends `${infer Char}${infer Rest}` ? Char | GetChars<Rest> : never;

type T2 = GetChars<'abcdefghijklmnopqrstuvwxyz'>;
