class Bankaccount {
    accountbalance;
    constructor(accountbalance) {
        this.accountbalance = accountbalance;
    }
    credit(amount) {
        if (amount > 0) {
            this.accountbalance += amount;
            console.log("Withdrawn succesfully, You remaining amout:" + this.accountbalance);
        }
        else {
            console.log("Error! Try again later...");
        }
    }
    debit(amount) {
        if (amount > 0 && amount < this.accountbalance) {
            this.accountbalance -= amount;
            console.log("Debit was successful, You current balance is: " + this.accountbalance);
        }
        else {
            console.log("Errr... Try again later!");
        }
    }
}
// Making a class2
class customer {
    person;
    age;
    gender;
    mobile_number;
    bankaccount;
    constructor(person, age, gender, mobile_number, bankaccount) {
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }
    display() {
        console.log("Name: " + this.person.firstname + " " + this.person.lastname);
        console.log("Age:" + this.age);
        console.log("Gender:" + this.gender);
        console.log("Mobile Number:" + this.mobile_number);
        console.log("Amount in Bank:" + this.bankaccount.accountbalance);
    }
}
let acc1 = new Bankaccount(1000);
const detail1 = new customer({ firstname: "Herry", lastname: "James" }, 20, "Male", 10972578098, acc1);
detail1.display();
detail1.bankaccount.debit(500);
console.log();
let acc2 = new Bankaccount(2000);
const detail2 = new customer({ firstname: "Alex", lastname: "Andrew" }, 19, "Female", 16524789972, acc2);
detail2.display();
detail2.bankaccount.debit(1500);
console.log();
export {};
