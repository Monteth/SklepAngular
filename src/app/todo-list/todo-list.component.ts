import {Component, OnInit} from '@angular/core'

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  todos = [
    new Todo(1, 'Learn to dance', false, new Date(2018, 12, 30)),
    new Todo(2, 'Do a shopping', false, new Date(2018, 12, 17)),
    new Todo(3, 'Make new project', false, new Date(2019, 1, 1))
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
