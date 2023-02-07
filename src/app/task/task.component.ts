import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/task.type';

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.css']
})
export class TaskComponent {
	@Input() task?: Task
	@Output() taskDeleted: EventEmitter<Task> = new EventEmitter<Task>()

	deleteTask() {
		this.taskDeleted.emit(this.task)
	}
}
