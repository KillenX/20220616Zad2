import { Component } from '@angular/core';
import { Task } from 'src/task.type';
import { TaskProviderService } from '../task-provider.service';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
	tasks: Task[]
	constructor(private taskProvider: TaskProviderService) {
		this.tasks = taskProvider.getTasks()
	}

	deleteTask(event: Task) {
		this.taskProvider.deleteTask(event)
		this.tasks = this.taskProvider.getTasks()
	}
}
