# Simple JavaScript To-Do List

This is a simple command-line based To-Do List application written in JavaScript. The application allows you to add, view, delete, and mark tasks as done. It's a great way to get familiar with basic JavaScript, Node.js, and handling user input in the terminal.

## Features

- **Add Tasks**: You can add a task to your to-do list.
- **View All Tasks**: Displays all the tasks along with their status (done or not done).
- **Delete Tasks**: Remove tasks from the list by specifying their task number.
- **Mark as Done**: Mark tasks as completed by specifying their task number.
- **Exit Program**: Safely exit the application.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A terminal or command prompt to run the script.

## Installation

1. Clone this repository or download the script file.
   
   ```bash
   git clone https://github.com/sinakhaksar/todo-list.git
    ```
2. Navigate to the project directory.

    ```bash
    cd todo-list-js
    ```
3. Install the required dependencies (only readline-sync).

    ```bash
    npm install readline-sync
    ```

## Usage

1. Run the script using Node.js.

    ```bash
    node todo-list.js
    ```

2. Follow the prompts to manage your to-do list:

- **Add a Task**: Type `1` and enter the task description.
- **View All Tasks**: Type `2` to see all the tasks and their status.
- **Delete a Task**: Type `3` and enter the task number you want to delete.
- **Mark a Task as Done**: Type `4` and enter the task number you want to mark as done.
- **Exit Program**: Type `5` to exit the application.

## Example 

    
    Choose between:
    1. Add tasks
    2. View all tasks
    3. Delete task
    4. Mark as Done
    5. Exit program
    Enter your choice: 1
    Add a Task: Finish writing README.md
    Task: 'Finish writing README.md' added successfully.

### Key Sections:

1. **Introduction**: Brief overview of the project.
2. **Features**: Highlights the capabilities of the script.
3. **Prerequisites**: Lists necessary tools/software.
4. **Installation**: Step-by-step guide to get the script running.
5. **Usage**: Instructions on how to use the application.
6. **Example**: A sample interaction with the script.
7. **Acknowledgments**: Recognition of the tools used.
#
Thanks for reading ❤️ have a good day