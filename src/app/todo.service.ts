import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }
  todos = [
    {
      todoid: 1,
      tododate: '11/11/2020',
      title: "Wake Up",
      tododesc: "Wake up before sunrise!"
    },
    {
      todoid: 2,
      tododate: "11/11/2020",
      title: "Brush",
      tododesc: "Brush your teeth!"
    },
    {
      todoid: 3,
      tododate: "11/11/2020",
      title: "Get ready",
      tododesc: "You have your interview at 10 AM!"
    }
  ];

}