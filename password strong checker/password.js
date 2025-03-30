
// const { log } = require("console");
// const readline = require("readline")
// const rl = readline.createInterface ({
//    input:process.stdin,
//    output:process.stdout
// });
// rl.question("Enter your password: ", function(password){
//     if(password.includes(",") || password.includes("?") || password.includes("!") || password.includes("@") ) {
//         console.log("Strong Password");
        
//     } else if (password.length < 6) {
//         console.log("your password is very weak");
        
//     }
//     else {
//         console.log("your password is not strong");
        
//     }
//     rl.close();
// });


const prompt = require("prompt-sync")();

const myObjects = {
    strongest: ["!", "@", "#", "$", "?"],
    stronger: [",", ":"]
};

const checkers = ".,!?;:\"'-_()[]{}\\/|&*@#%$^~`";
const uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const password = () => {
    while (true) {
        const getPassword = prompt("Enter your password(Type exit to escape): ");

        // Check if the password contains at least one symbol
        const hasSymbol = checkers.split("").some(char => getPassword.includes(char));

        // Check if the password contains at least one uppercase letter
        const hasUppercase = uppercaseString.split("").some(char => getPassword.includes(char)); {

            if(hasSymbol && hasUppercase) {
                console.log("your password is very strong"); 
            }
            else if (["S", "E", "V", "X"].some(char => getPassword.includes(char))) {
                console.log("Strong password");
            } 
            else if (getPassword.length <= 2) {
                console.log("Enter a valid password");
            } 
            else {
                console.log("Your password is weak");
            }
            if(getPassword.toLowerCase() === "exit"){
                console.log("Exiting...");
                break;
            }
        }

    }
    
};


const hackingPeriod = (password) => {
    while (true) {
        const periodTime = prompt(
            "Enter your password degree of strength:\n A: Very strong\n B: Strong\n C: Weak"
        ).toLowerCase(); // Convert input to lowercase for consistency
        if(periodTime === password) {
            if (periodTime === "a") {
                console.log("Your password will take lots of years to crack.");
                break; // Exit loop
            } else if (periodTime === "b") {
                console.log("11 months");
                break;
            } else if (periodTime === "c") {
                console.log("4months");
                break;
            } 
            else {
                console.log("Invalid input. Please enter A, B, or C.");
            }
        } else {
            return periodTime;
        }


    }
};


password();
hackingPeriod();
