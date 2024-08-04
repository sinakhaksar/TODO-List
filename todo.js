const readlineSync = require('readline-sync');
const taskList = []
let runProgram = true;


function options() {
    console.log('\nChoose betwin\n1 add tasks\n2 view all tasks\n3 delet task\n4 exit program');
    
    const choice = readlineSync.question("Enter your choice: ");
    switch (choice) {
        case '1' :
            const userTask = readlineSync.question("add a task: ");
            addTask(userTask)
            break;
        case '2' :
            viewAllTasks(taskList);
            break;
        case '3' :
            const taskId = readlineSync.question('Enter task id: ')
            deleteTask(parseInt(taskId))
            break;
        case '4':
            runProgram = false;
            break;
        default:
            console.log('\tInput Error!\n\tTry agin');
            console.log('--------------------');
    }
}

function deleteTask(taskId) {
    // TODO...
}

function viewAllTasks(taskList) {
    if (taskList.length > 0) {
        for (let item in taskList) {
            if (!taskList[item]['done']) {
                console.log(parseInt(item) +1 , taskList[item]['task'],);
            }
        }
    }
    else {
        console.log("List is empty. add the first item");
    }
}

function addTask(task) {
    taskList.push({task: task,done: false });
    console.log('task added successfully');
}

function greeting() {
    console.log('_______________________________________________')
    console.log('Hello and welcome to your TODO list.');
    console.log('in heare you can add task, delete tasks');
    console.log('and most importently, see your undone tasks ')
    console.log('hope you enjoe it ');
    console.log('_______________________________________________\n')
}

function main() {
    greeting();
    while (runProgram) {
        options();
    }
}

main();