import { Component } from '@angular/core';
import { Task } from 'src/task.type';
import { TaskProviderService } from '../task-provider.service';

@Component({
	selector: 'app-new-task',
	templateUrl: './new-task.component.html',
	styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
	task: Task = {
		priority: 1,
		title: '',
		description: '',
		date: '',
		type: ''
	}
	title?: string
	description?: string
	type?: string
	date?: Date
	priority: number = 1

	submitted = false;
	constructor(private taskProvider: TaskProviderService) { }

	onSubmit() {
		this.submitted = true
		console.log(this.task);
		this.taskProvider.addTask(this.task)
	}
}
