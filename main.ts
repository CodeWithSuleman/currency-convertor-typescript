import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.yellow.bold("\n\t Wellcome to CodeWithSuleman - Currency Convertor\n"));

// DEFINE the list of currencies and their exchange rates

let exchange_rate : any ={
    "USD":1,//Base currency
    "EUR":0.9,//EURO
    "JYP":113,//Jappanese
    "CAD":1.3,//Canadian
    "AUD":1.65,//"AUtrailian"
    "PKR":277.77
    ,//"Pakistan"
}

//promt the user to select the currencies to convert from and to

let user_ans = await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:"currency to convert from?",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]

    },
    {
        name:"to_currency",
        type:"list",
        message:"currency to convert into?",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]

    },
    {
        name:"amount",
        type:"input",
        message:"enter ther amount to convert"

    }
]);
//perform currency conversion

let from_amount = exchange_rate[user_ans.from_currency];
let to_amount = exchange_rate[user_ans.to_currency];
let amount = user_ans.amount;

//formula

let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;

console.log(`converted amount: ${chalk.yellow.bold(converted_amount.toFixed(2))}`);
