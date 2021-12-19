import BankAccount from "./BankAccount";

export class BankAccountWithFee extends BankAccount {
    fee: number = 2;
    applyFee(): void {
        super.balance - this.fee 
    }
   
}

let BankOne: BankAccountWithFee = new BankAccountWithFee(1000, 3);
let BankTwo: BankAccount = new BankAccount (1000, 5);
let BankThree: BankAccount = new BankAccount(500,0.05);
console.log(BankOne.balance);
BankOne.applyFee();
console.log(BankOne.balance);

console.log(BankThree.balance);
BankThree.addInterest();
BankThree.applyFee();
console.log(BankThree.balance);


console.log(BankOne);
console.log(BankTwo);

export default BankAccountWithFee;