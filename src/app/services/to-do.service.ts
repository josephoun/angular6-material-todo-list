import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  /**
   * Todo list
   */
  toDoList: any = [];

  constructor() {
  }

  /**
   * Get Todo List
   */
  getToDoList() {
    return this.toDoList;
  }

  /**
   * Set new Todo list
   * @param newList - new Todo list
   */
  setToDoList(newList) {
    this.toDoList = newList
  }

  /**
   * Duplicate task with specific index
   * @param index : index of task to duplicate
   */
  duplicate(index) {
    var cloned = Object.assign({}, this.toDoList[index]);
    cloned.id = Date.now();
    this.toDoList.push(cloned);
  } 

  /**
   * Remove task with specific index
   * @param index : index of task to remove
   */
  remove(index: number) {
    this.toDoList.splice(index, 1);
  }

  /**
   * Add task
   * @param task : task to add
   */
  addToDo(task) {
    this.toDoList.unshift(
      {
        id: Date.now(),
        title: task.title.trim(),
        completed: false,
        dueDate: task.dueDate
      });

    // to prevent showing completed tasks on top.
    this.sortToDoList();
  }

  /**
   * sort todo list , completed tasks will be moved to bottom
   **/
  sortToDoList() {
    this.toDoList.sort(function (a, b) {
      // false values first
      return (a.completed === b.completed) ? 0 : a.completed ? 1 : -1;
    });
  }
}
