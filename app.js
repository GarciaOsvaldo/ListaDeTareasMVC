const TaskModel = require('./model');
const TaskView = require("./view");
const TaskConstroller = require("./controller");

const model = new TaskModel();
const view = new TaskView();
const controller = new TaskConstroller(model, view);
controller.run();