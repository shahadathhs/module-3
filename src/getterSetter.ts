{
    class BankAccount {
        readonly id: number;
        name: string;
        email: string;
        private _balance: number;
        protected _balanceTwo : number;


        constructor(id: number, name: string, email: string, balance: number, balanceTwo : number) {
            this.id = id;
            this.name = name;
            this.email = email;
            this._balance = balance;
            this._balanceTwo  = balanceTwo;
        }

        // public addDeposit(amount: number) {
        //     this._balance += amount;
        // }
        set addDeposit(amount: number) {
            this._balance += amount;
        }

        // public getBalance():number {
        //     return this._balance
        // }
        get getBalance():number {
            return this._balance
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            this._balanceTwo *= -1;
            // this._balance
        }
    }

    const poor = new BankAccount(1, "S", "sajib", 12, 12)

    poor.addDeposit = 100

    const balance: number = poor.getBalance
    console.log(balance)
}