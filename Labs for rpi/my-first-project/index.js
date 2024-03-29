import chalk from "chalk";
import { TaskManager } from "./task-manager.js";
import { Task } from "./models.js";
import { EventEmitter } from 'events';

function print(tasks) {
  if (tasks.length > 0)
    tasks.forEach((element) => {
      if (element.status === false) console.log(chalk.red(element.ToString()));
      else console.log(chalk.blue(element.ToString()));
    });
  else console.log("Нет задач");
}

const eventEmitter = new EventEmitter();

eventEmitter.on('taskAdded', Task => {
    console.log(`AddedTask ${Task.description}`);
});
const taskManager = new TaskManager("./tasks.json");
console.log("!!!!!!!!Tasks from *.json!!!!!!!!");
print(taskManager.tasks);

taskManager.save();

console.log("!!!!!!!!Add New Task 4!!!!!!!!");
taskManager.add(new Task(4, "Послушать альбом *Meddle*", true));
print(taskManager.tasks);

console.log("!!!!!!!!Remove Task 4!!!!!!!!");
taskManager.remove(4);
print(taskManager.tasks);

console.log("!!!!!!!!Remove Task 3!!!!!!!!");
taskManager.remove(3);
print(taskManager.tasks);