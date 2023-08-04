import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  // todoList contains all todos
  todoList: Todo[] = [];
  constructor() { }

  ngOnInit() {
    
  }
  // write logic to the onAddTodo method is to add a new todo to list
  // get maximum id in list and assign maximum id plus one while adding a todo
  onAddTodo(todoText: any) {
    if(todoText.trim() == ''||todoText==null)
    {
        return;
    }
    else if(this.todoList.length == 0)
    {
      this.todoList.push({todoId:1, text:todoText, isCompleted:false});
      return ;
   
    }
    else
    {
      var maxid=this.todoList[0].todoId;
      for(var list of this.todoList)
      {
        if(maxid<list.todoId)
        {
          maxid=list.todoId;
        }
      }
      this.todoList.push({todoId:maxid+1, text:todoText, isCompleted:false});
    }
  }

  // write logic to the onClearTodos method to delete the all todos in the todoList
  onClearTodos() {
    this.todoList = [];
  }

  // write logic to method onCompletingTask, to mark todo as as completed or not
  onCompletingTodo(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  // write logic to method onDeletingTask, to delete the todo
  onDeletingTodo(todoId: number) {
    this.todoList = this.todoList.filter(todo => todo.todoId !== todoId);
  }
  
}
