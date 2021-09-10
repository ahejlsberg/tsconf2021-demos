
class Thing {
    #size = 0;
    get size() {
        return this.#size;
    }
    set size(value) {
        let num = +value;
        this.#size = Number.isFinite(num) ? num : 0;
    }
}

let thing = new Thing();
thing.size = 42;
thing.size = "123.456";
thing.size = false;
