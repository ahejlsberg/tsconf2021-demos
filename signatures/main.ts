
//#region Symbol index signatures

type Counters = {
    [key: symbol]: number | undefined;
}

declare let counters: Counters;

const key1 = Symbol();
const key2 = Symbol();

counters[key1] = 1;
counters[key2] = 2;
counters['foo'] = 123;

//#endregion

//#region Template literal index signatures

type Options = {
    width?: number;
    height?: number;
    [optName: `data-${string}`]: unknown;
}

let opts: Options = { width: 100, height: 100, "data-foo": true, "bad-foo": false };

//#endregion

//#region Tagged primitive index signatures

type Id = string & { __tag: 'id '};

declare const s: string;
declare const id: Id;
declare const names: Record<Id, string>;  // { [key: Id]: string }

names[s] = 'foo';   // Error
names[id] = 'bar';  // Ok

//#endregion

//#region Union index signatures

type PropertyMap = {
    [key: string | number | symbol]: boolean;
};

//#endregion
