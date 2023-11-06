// TODO: Include packages needed for this application
const inquirer= require("inquirer")
const fs= require("fs")
const path=require("path")
const generateMarkdown= require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the Title of your project?"
    },
    {
        type:"input",
        name:"description",
        message:"Enter a brief Description of your project:"
    },
    {
        type:"input",
        name:"installation",
        message:"What packages were installed?"
    },
    {
        type:"input",
        name:"usage",
        message:"How to use your project?"
    },
    {
        type:"list",
        name:"license",
        message:"What license is your project license under?",
        choices:["GNU", "APACHE2.0", "MIT", "ISC", "NONE"]
    },
    {
        type:"input",
        name:"contribution",
        message:"What are the Guidelines fot Contributing?"
    },
    {
        type:"input",
        name:"test",
        message:"What kind of test did you run?"
    },
    {
        type:"input",
        name:"email",
        message:"What is your email?"
    },
    {
        type:"input",
        name:"github",
        message:"What is yout github username?"
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("./output/README.md", generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
