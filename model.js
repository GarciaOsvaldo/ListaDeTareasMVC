class TaskModel {
  //Aqui comienza el constructor
  constructor(){
      this.tasks = [ ];
  }///finish for constructor

  //inicia metodo de agregar tareas
  addTask(tasks){
      this.tasks.push({
          description: tasks,
          completed: false
        });
  }//fin metodo agregar

  //Tareas Completadas
  completeTask(taskIndex) {
      this.tasks[taskIndex].completed = true;
    }
    ///sin completar
  uncompleteTask(taskIndex) {
      this.tasks[taskIndex].completed = false;
  }
  //Eliminar
  deleteTask(taskIndex) {
      this.tasks.splice(taskIndex, 1);
    }

  //metodo de devolucion
  getTask(){
      return this.tasks;
  }

  // Mostrar las tareas pendientes
 showTask() {
  console.log('Tareas pendientes:');
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
  }
}

// Marcar una tarea como completada
completeTasks(taskIndex) {
  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks[taskIndex] = `✓ ${tasks[taskIndex]}`;
    console.log(`Tarea ${taskIndex + 1} marcada como completada.`);
  } else {
    console.log('Número de tarea inválido.');
  }
}

showPendingTasks() {
  const showPending = prompt("Ingrese 'show pending' para mostrar tareas pendientes");
  if (showPending === 'show pending') {
      const tasks = taskList.getElementsByTagName('li');
      for (const task of tasks) {
          task.style.display = 'block';
      }
  }
}


}//finaliza la clase metodo

///accion para mandar una clase al controlador
module.exports = TaskModel;