class IdGenerator {
    seq: number;

    constructor(seqParam: number) {
        this.seq = seqParam;
    }

    next():any {
        return ++this.seq;
    }
}

class PrefixIdGenerator extends IdGenerator {

    prefix: string;

    constructor(seq,prefixParam) {
        super(seq);
        this.prefix = prefixParam;
    }

    nextWithPrefix() {
        return this.prefix + super.next();
    }

    next() {
        return this.prefix + ": " + super.next();
    }
}

let mygen: IdGenerator;
  mygen  = new IdGenerator(0);
console.log(mygen.next());
console.log(mygen.next());


let prefixGen: PrefixIdGenerator;
prefixGen = new PrefixIdGenerator(10,"menu-item");
// console.log(prefixGen.next());


console.log(" checking with parent reference ");

let pGen: IdGenerator;
pGen = new PrefixIdGenerator(1000, "user-row ");

console.log(pGen.next());
console.log(pGen.next());

// pGen.nextWithPrefix();

let xyz =
    pGen as PrefixIdGenerator;

console.log(xyz.nextWithPrefix());
