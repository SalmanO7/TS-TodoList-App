import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        { message: "What would you like to add in your todo?", name: "userFirstInput", type: "input" },
        {
            message: "What would you like to add more in your todo?",
            name: "confirmInput",
            type: "confirm",
            default: "true"
        },
    ]);
    if (todoQuestions.userFirstInput == "") {
        console.log("\n Please Add Your Todos \n");
        condition = todoQuestions.confirmInput;
    }
    else {
        todos.push(todoQuestions.userFirstInput);
        condition = todoQuestions.confirmInput;
        todos.forEach((todo, index) => console.log(`${index}: ${todo}`));
    }
}
