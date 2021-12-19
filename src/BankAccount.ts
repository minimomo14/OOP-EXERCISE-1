class BankAccount {
    balance: number = 0;
    interestRates: number = 0;
    applyFee: any;
    constructor (balance: number, interestRates: number) {
        this.balance = balance;
        this.interestRates = interestRates;
    }

    addInterest(): void {
       this.balance = this.balance * (1 + this.interestRates);
    }
}
export default BankAccount