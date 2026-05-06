class BankAccount{
    #balance = 0; //private variable | access modifier

    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(`Deposited: $${amount}. Current balance: $${this.#balance}`);
        }else{
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount){
        if (amount > 0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. Current balance: $${this.#balance}`);
        }else{
            console.log("Invalid withdrawal amount or insufficient funds.");
        }
    }

    getbalance(){
        return this.#balance;
    }
}

const myAccount = new BankAccount();
myAccount.deposit(100); // Deposited: $100. Current balance: $100
myAccount.withdraw(30); // Withdrew: $30. Current balance: $70
console.log("Current Balance:", `$${myAccount.getbalance()}`); // Current Balance: 70

const anotherAccount = new BankAccount();
anotherAccount.deposit(200);
anotherAccount.withdraw(50);
console.log(`Another Account Balance: $${anotherAccount.getbalance()}`); // Another Account Balance: 150