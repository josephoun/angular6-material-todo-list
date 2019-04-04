import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent implements OnInit {

  @Input() task: any;
  @Input() taskName: any;
  @Input() dueDate: Date;
  @Input() showPrompt: any;
  @Input() placeholder: string;
  @Input() popupTitle: string;
  @Input() inputTitle: string;
  @Input() okText: string;
  @Input() cancelText: string;
  @Output() valueEmitted = new EventEmitter<string>();
  popupForm: any;

  /**
   * minimum date selection in task Due Date
   */
  minDate : Date;
  
  constructor(private toDoService: ToDoService) {
    this.cancelText = 'Cancel';
    this.minDate = new Date();
  }

  resetForm() {
    this.popupForm.reset();
  } 

  emitValue(cancel) {
    if (cancel) {
      this.showPrompt.val = false;
      return;
    }
    if (this.popupForm && this.popupForm.value)  {
      var obj = {title : this.popupForm.value.taskName, dueDate: this.popupForm.value.dueDate};  
      this.valueEmitted.emit(JSON.stringify(obj));
    }
  }
  
  ngOnInit() {
    this.popupForm = new FormGroup({
      taskName: new FormControl('', Validators.required),
      dueDate: new FormControl('', Validators.required),
    });
  }
}
