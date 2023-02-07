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

	constructor(private taskProvider: TaskProviderService) { }

	onSubmit() {
		this.taskProvider.addTask(this.task)
	}
}
