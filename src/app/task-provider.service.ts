import { Injectable } from '@angular/core';
import { Task } from 'src/task.type';

@Injectable({
	providedIn: 'root'
})
export class TaskProviderService {
	private tasks: Task[] = []
	constructor() { }

	addTask(task: Task) {
		this.tasks.push(task)
	}

	getTasks() {
		return this.tasks
	}
}
