import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskProviderService } from './task-provider.service';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
	declarations: [
		AppComponent,
		TasksComponent,
		NewTaskComponent,
		TaskComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [TaskProviderService],
	bootstrap: [AppComponent]
})
export class AppModule { }
