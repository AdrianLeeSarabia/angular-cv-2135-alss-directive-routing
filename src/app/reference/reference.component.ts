import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css'],
})
export class ReferenceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  addReference = [
    { name: 'Full Name', connection: 'Relationship', email: 'Section' },
    { name: 'Raquel Bondoc', connection: 'Student', email: 'WD - 301' },
    {
      name: 'Almario Guzman',
      connection: 'Student',
      email: 'WD - 301',
    },
    { name: 'Noie Manoy', connection: 'Student', email: 'WD - 301' },
    {
      name: 'Kisses Reyes',
      connection: 'Student',
      email: 'WD - 301',
    },
    {
      name: 'Jed Bartolome',
      connection: 'Student',
      email: 'WD - 301',
    },

    {
      name: 'Dhana Bermudez',
      connection: 'Student',
      email: 'WD - 301',
    },
    {
      name: 'Mark Laus',
      connection: 'Student',
      email: 'WD - 301',
    },
    {
      name: 'Quinny Lacsina',
      connection: 'Student',
      email: 'WD - 301',
    },
  ];
}
