const TaskModel = require('./model');
const TaskView = require('./view');

class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    async run() {
        while (true) {
            this.view.showTasks(this.model.getTask());
            const newTask = await this.view.getUserInput();
            if (newTask.toLowerCase() === "quit") {
                break;
            }
            this.model.addTask(newTask);
        }
    }
}

module.exports = TaskController;
