class BilanganPrima {
    result = [];

    constructor(n) {
        this.n = n;
    }

    prima() {
        for (let i = 2; i < this.n; i++) {
            let flag = 0;

            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }

            if (i > 1 && flag == 0) {
                this.result.push(i);
            }
        }

        return this.result;
    }
}

const data = new BilanganPrima(10);
console.info(data.prima());