import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  achievements1 = [
    "Mary Help of Christian School",
    "Holy Angel University",
    'Don Bosco Academy Pampanga',
  ];

}