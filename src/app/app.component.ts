import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Jest demo';
  peopleName = '';

  constructor(
    private _formBuilder: FormBuilder,
    protected registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerService.getPeopleData(2).subscribe(people => {
      this.peopleName = people.name;
    });
  }
}
