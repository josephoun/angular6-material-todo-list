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

  /**
   * Popup child component 
   */
  @ViewChild(PopupComponent) popupComponent: PopupComponent;

  /**
   * Object with boolean val to determine wether popup component is shown or not
   */
  showPopup: any = { val: false };

  /**
   * Task in edit mode
   */
  editingTodo: any = null;

  /**
   * Todo list
   */
  todoList: any = [];

  /**
   * Ok Button Text to be passed to popup component which will be changed according to add/edit mode
   */
  okButtonText = 'Create task';

  /**
   * Popup title text to be passed to popup component which will be changed according to add/edit mode
   */
  titleText = 'New Task';

  /**
   * Formgroup for the Filter section
   */
  filterForm = this.getFilterForm();

  constructor(private toDoService: ToDoService) {
    this.todoList = this.toDoService.getToDoList();
  }

  /**
   * Get new filter form
   */
  getFilterForm() {
    return new FormGroup({
      id: new FormControl('', Validators.pattern('^[0-9]*$')),
      name: new FormControl('', Validators.pattern('^[a-zA-Z0-9_.-]*$')),
      dueDate: new FormControl('')
    });
  }

  /**
   * Callback for adding or editing existing task
   * @param todo - Task in edit mode. Null if Creation mode (not editing mode).
   */
  editTaskCallback(todo = null) {
    this.okButtonText = 'Create task';
    this.editingTodo = todo;
    if (todo) {
      this.okButtonText = 'Edit and Save';
      this.titleText = 'Edit Task';
    } else {
      this.popupComponent.resetForm();
    }

    this.showPopup.val = true;
  }

  /**
   * Remove Task with specific index
   * @param index - index of task to remove
   */
  remove(index: number) {
    //this.todoList.splice(index, 1);
    this.toDoService.remove(index);
  }

  /**
   * Duplicate Task with specific index
   * @param index - index of task to duplicate
   */
  duplicate(index: number) {
    this.toDoService.duplicate(index);
  }

  /**
   * Override todo task in edit mode
   * @param task 
   */
  editTodo(task) {
    Object.assign(this.editingTodo, task)
  }

  /**
   * Drag and Drop callback
   * @param event - drop event
   */
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
    this.toDoService.sortToDoList();
  }

  /**
   * EventEmitter callback
   * @param task - task to update. Add or Edit, according to editingTodo object
   */
  updateTodo(task) {
    var task = JSON.parse(task);

    if (task && task.title) {
      if (this.editingTodo) {
        //edit mode
        this.editTodo(task);
      } else {
        //creation mode
        this.addTodo(task);
      }
    }
    this.hidePopup();
  }

  /**
   * Sort Todo list
   */
  sortToDoList() {
    this.toDoService.sortToDoList();
  }

  /**
   * Add Todo task
   * @param task - task to add
   */
  addTodo(task) {
    this.toDoService.addToDo(task);
    // to prevent showing completed tasks on top.
    this.toDoService.sortToDoList();
    // could be achieved more effiecently by adding new element to the bottom of the completed tasks section
  }

  /**
   * Hides popup
   */
  hidePopup() {
    this.showPopup.val = false;
    this.editingTodo = null;
  }
}