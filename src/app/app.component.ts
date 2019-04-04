import { Component, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToDoService } from './services/to-do.service'
import { PopupComponent } from './components/popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild(PopupComponent) popupComponent: PopupComponent;

  showDialog: any = { val: false };
  editingTodo: any = null;
  todoList: any = [];
  okButtonText = 'Create task';
  titleText = 'New Task';
  filterForm = this.getFilterForm();

  constructor(private toDoService: ToDoService) {
    this.todoList = this.toDoService.getToDoList();
  }

  getFilterForm() {
    return new FormGroup({
      id: new FormControl('', Validators.pattern('^[0-9]*$')),
      name: new FormControl('', Validators.pattern('^[a-zA-Z0-9_.-]*$')),
      dueDate: new FormControl('')
    });
  }

  todoDialog(todo = null) {
    this.okButtonText = 'Create task';
    this.editingTodo = todo;
    if (todo) {
      this.okButtonText = 'Edit and Save';
      this.titleText = 'Edit Task';
    } else {
      this.popupComponent.resetForm();
    }

    this.showDialog.val = true;
  }

  remove(index: number) {
    //this.todoList.splice(index, 1);
    this.toDoService.remove(index);
  }

  duplicate(index: number) {
    this.toDoService.duplicate(index);
  }

  editTodo(task) {
    Object.assign(this.editingTodo, task)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
    this.toDoService.sortToDoList();
  }

  updateTodo(task) {
    var task = JSON.parse(task);

    if (task && task.title) {
      if (this.editingTodo) {
        this.editTodo(task);
      } else {
        this.addTodo(task);
      }
    }
    this.hideDialog();
  }

  sortToDoList() {
    this.toDoService.sortToDoList();
  }

  addTodo(task) {
    this.toDoService.addToDo(task);
    // to prevent showing completed tasks on top.
    this.toDoService.sortToDoList();
    // could be achieved more effiecently by adding new element to the bottom of the completed tasks section
  }

  hideDialog() {
    this.showDialog.val = false;
    this.editingTodo = null;
  }
}