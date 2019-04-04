import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  toDoList: any = [];

  constructor() {
  }

  getToDoList() {
    return this.toDoList;
  }

  setToDoList(newList) {
    this.toDoList = newList
  }

  duplicate(index) {
    this.toDoList.push(Object.assign({}, this.toDoList[index]));
  } 

  remove(index: number) {
    this.toDoList.splice(index, 1);
  }

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
    // could be achieved more effiecently by adding new element to the bottom of the completed tasks section
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
