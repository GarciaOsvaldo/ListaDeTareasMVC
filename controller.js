
const TaskModel = require('./model');
const TaskView = require('./view');

class TaskController{
    constructor(model, view){

        this.model = model;
        this.view = view;
    }//termina el constuctor

    async run(){
        while (true) {
            this.view.showTasks(this.model.getTask());
            const userInput = await this.view.getUserInput();

            if (userInput.toLowerCase() === 'quit') {
              break;
            }
      
            if (userInput.toLowerCase().startsWith('show')) {
              const status = userInput.toLowerCase().split(' ')[1];
              this.view.showTasks(this.model.getTask(), status);
            } else if (userInput.toLowerCase().startsWith('done')) {
              const taskIndex = parseInt(userInput.toLowerCase().split(' ')[1]) - 1;
              this.model.completeTasks(taskIndex);
            } else if (userInput.toLowerCase().startsWith('undone')) {
              const taskIndex = parseInt(userInput.toLowerCase().split(' ')[1]) - 1;
              this.model.showPendingTasks(taskIndex);
            } else if (userInput.toLowerCase().startsWith('delete')) {
              const taskIndex = parseInt(userInput.toLowerCase().split(' ')[1]) - 1;
              this.model.deleteTask(taskIndex);
            } else {
              this.model.addTask(userInput);
            }

        }//termiona el while
    }//fin metodo run

}//Aqui termina la calse controlador

module.exports = TaskController;