import { Injectable } from '@angular/core';
import { Task } from 'src/task.type';

@Injectable({
	providedIn: 'root'
})
export class TaskProviderService {
	private storageKey = "tasks"

	private storeTasks(tasks: Task[]) {
		sessionStorage.setItem(this.storageKey, JSON.stringify(tasks))
	}
	getTasks(): Task[] {
		const stored = sessionStorage.getItem(this.storageKey)
		if (stored) {
			return JSON.parse(stored)
		}
		return []
	}

	addTask(task: Task) {
		const tasks = this.getTasks()
		tasks.push(task)
		this.storeTasks(tasks)
	}

	deleteTask(deletedTask: Task) {
		let tasks = this.getTasks()
		tasks = tasks.filter((task) => task.title != deletedTask.title)
		this.storeTasks(tasks)
	}

}
