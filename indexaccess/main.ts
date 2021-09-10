
function foo(array: string[]) {
    for (let i = 0; i < array.length; i++) {
        let str = array[i];
        console.log(str.toUpperCase());
    }
}

foo(['foo', 'bar', 'baz']);
