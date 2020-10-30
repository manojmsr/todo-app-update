import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { TodoService } from "../todo.service";
import {todos} from "../todo.service";
@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {
  todos=todos;
  constructor(TodoService: TodoService ) { }
  ngOnInit(): void {
  }
  addTodo(ID : number, title : string, Date: string , Desc: string)
  {
    var newtodos = {
      todoid: ID,
      title: title,
      tododate: Date,
      tododesc: Desc
    };
    this.todos.push(newtodos);
  }


}
