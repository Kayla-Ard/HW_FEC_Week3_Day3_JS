//Exploring JavaScript Objects

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Pages: ${this.pages}`);
    }
}
/*
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
book1.displayInfo(); */





// Exploring Objects and Math in JavaScript

class Account {
    constructor(accountNumber, balance, owner) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Successfully deposited $${amount} into account ${this.accountNumber}.`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Successfully withdrew $${amount} from account ${this.accountNumber}.`);
        } else {
            console.log(`Insufficient funds in account ${this.accountNumber} to withdraw $${amount}.`);
        }
    }

    calculateCompoundInterest(rate, years) {
        const n = 1; 
        const principal = this.balance;
        const exponent = n * years;
        const amount = principal * Math.pow((1 + rate / n), exponent);
        const roundedAmount = Math.ceil(amount);
        console.log(`Compound interest after ${years} years: $${roundedAmount - principal}`);
    }
}

/*
const account1 = new Account(12345, 1000, "Jason Davis");
console.log("Initial balance:", account1.balance);
account1.deposit(500);
console.log("Balance after deposit:", account1.balance);
account1.withdraw(200);
console.log("Balance after withdrawal:", account1.balance);
account1.withdraw(1500); */

