const readlineSync = require('readline-sync');
const taskList = [];
let runProgram = true;

function options() {
    console.log('\nChoose betwin:\n1. Add tasks\n2. View all tasks');
    console.log('3. Delete task\n4. Mark as Done\n5. Exit program');
    
    const choice = readlineSync.question("Enter your choice: ");
    switch (choice) {
        case '1' :
            const userTask = readlineSync.question("Add a Task: ");
            addTask(userTask);
            break;
        case '2' :
            viewAllTasks();
            break;
        case '3' :
            const taskId = readlineSync.question('Enter Task id: ');
            deleteTask(taskId);
            break;
        case '4':
            const doneTaskId = readlineSync.question("Done task ID: ");
            markAsDone(doneTaskId);
            break;
        case '5':
            runProgram = false;
            break;
        default:
            console.log('--Input Error!\n--Try agin');
            console.log('---------------------------');
    };
}

function addTask(task) {
    taskList.push({task: task, done: false});
    console.log(`Task: '${task}'.\nadded successfully`);
    return taskList;
}

function viewAllTasks() {
    if (taskList.length > 0) {
        taskList.forEach((task, taskId)=> {
            // Why task +1 ? =>  cus the list index starts from 0, 
            console.log(`${taskId+1}: ${task.task} done: ${task.done}`);
        });
    } else {
        console.log("List is empty. add the first item");
    } return;
}

function deleteTask(taskId) {
    if (!isNumber(taskId)) {
        console.log(`"${taskId}" is not a number!`);
        return;
    } else if (taskId <= 0 || taskId > taskList.length) {
        console.log(`"${taskId}" NOT in valid range.`);
        return;
    }
    const TaskToBeDeleted = taskList[taskId-1].task;
    taskList.splice(taskId-1, 1);
    console.log(`Task number ${taskId}: '${TaskToBeDeleted}'.\nwas DELETED successfully.`);
    return taskList;
}

function greeting() {
    console.log('_______________________________________________');
    console.log('Hello and welcome to your TODO list.');
    console.log('In here, you can add, delete, and see tasks.');
    console.log('And most importantly, you can mark your tasks as done.');
    console.log('Hope it helps you and you enjoy using it.');
    console.log('_______________________________________________\n');
    }

function isNumber(number) {
    // returns true if the input is numeric, and false when there is any alphabet in it, 
    // also when no input was entered
    return !isNaN(Number(number));
}

function markAsDone(taskId) {
    if (!isNumber(taskId)) {
        console.log(`"${taskId}" is not a number!\nTry agin`);
        return;
    }
    else if (taskId <= 0 || taskId > taskList.length) {
        console.log(`${taskId} is not in range!\nTry agin.`);
        return;
    }
    taskList[taskId-1].done = true;
    let counter = 0;
    taskList.forEach(task => {if (!task.done) {counter +=1;}}); // counts the tasks with done = fasle,    
    switch (counter) {
        case 0:
            console.log('GOOD JOB\nall tasks are done\nGet some rest or add some new tasks');
            break;
        case 1 : 
            console.log(`GOOD JOB\nonly one task left\n${taskList["task"]}`);
            break;
        default:
            console.log(`GOOD JOB\n${counter} tasks left.`);
            break;
    };
    return taskList;
}

function main() {
    greeting();
    while (runProgram) {
        options();
    };
}

main();