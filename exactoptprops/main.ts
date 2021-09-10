
// https://github.com/microsoft/TypeScript/issues/13195

function f1(obj: { a?: string, b?: string | undefined }) {
    let a = obj.a;  // string | undefined
    let b = obj.b;  // string | undefined
    obj.a = 'hello';
    obj.b = 'hello';
    obj.a = undefined;
    obj.b = undefined;
}

function f2(obj: { a?: string }) {
    obj.a.length;
    if ('a' in obj) {
        obj.a.length;
    }
    if (obj.hasOwnProperty('a')) {
        obj.a.length;
    }
}

function f3(obj: { a?: string }) {
    obj = obj;
    obj.a = obj.a;
    if ('a' in obj) {
        obj.a = obj.a;
    }
    if (obj.hasOwnProperty('a')) {
        obj.a = obj.a;
    }
}
