const { resolve } = require('path');

class TaskView{
    showTasks(tasks, status = 'all'){
        console.log(`Lista de Tareas (${status}):`);
        tasks.forEach((tasks, index)=>{
            if (status === 'all' || (status === 'completed' && tasks.completed) || (status === 'pending' && !tasks.completed)) {
                console.log(`${index + 1}. [${tasks.completed ? 'x' : ' '}] ${tasks.description}`);
              }
            
        });//para recorrer la lista
    }//metodo para mostrar la lista

//para obtener la entrada del usuario
    getUserInput(){
        const readline = require('readline');
        //guardar lo que el usuario digite
        const rl = readline.createInterface({
            input: process.stdin, output: process.stdout
        });
        return new Promise(resolve => {
            rl.question("Ingrese una tarea o una a opción (show all, show completed, show pending, done n, undone, delete n) (o cola 'quit' para salir)", answer => {
                rl.close();
                //si es una respuesta diferente
                resolve(answer);
            })//;
        });//fin del retorno
    }//aqui termina mi getUserInput

}//fin de la clase vista
module.exports = TaskView;//para enlazar 
