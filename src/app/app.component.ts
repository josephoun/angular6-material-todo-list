import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ToDoService } from './services/to-do.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  showDialog: any = {val: false};
  editingTodo: any = null;
  task: any;
  todoList: any = [];
  fieldValue: '';
  okButtonText = 'Create task';
  titleText = 'New Task';
  filterForm = this.getFilterForm();

  constructor(private todoService: ToDoService) {
    this.todoList = this.todoService.getToDoList();
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
      this.task = todo;
      this.okButtonText = 'Edit and Save';
      this.titleText = 'Edit Task';

    }
    this.showDialog.val = true;
  }

  remove(index: number) {
    //this.todoList.splice(index, 1);
    this.todoService.remove(index);
  }

  duplicate(index: number) {
    this.todoList.push(Object.assign({}, this.todoList[index]));
  }

  editTodo(task) {
    Object.assign(this.editingTodo, task)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
    this.todoService.sortTodoList();
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

  addTodo(task) {
   this.todoService.addToDo(task);

    // to prevent showing completed tasks on top.
    this.todoService.sortTodoList();
    // could be achieved more effiecently by adding new element to the bottom of the completed tasks section
  }

  hideDialog() {
    this.showDialog.val = false;
    this.editingTodo = null;
  }

  ngOnInit() {
    
  }
}