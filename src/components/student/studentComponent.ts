import { Component } from '@angular/core';

@Component(
  {
    selector: 'student-component',
    template: require('./template.html'),
  }
)
class StudentComponent {
  message: string;

  constructor() {
    this.message = 'Hello from student component to Hackathon 2018'
  }
}

export {
  StudentComponent
}
