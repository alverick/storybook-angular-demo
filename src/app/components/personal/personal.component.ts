import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent implements OnInit {
  @Input() submit: Subject<boolean> = new Subject();
  @Input() showButton = false;
  @Output() formSubmit = new EventEmitter<FormGroup>();
  @ViewChild('form', { static: false }) formElement: NgForm;
  personalForm = new FormGroup({
    birthDate: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required]),
  });

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.submit.subscribe(v => {
      console.log('value is changing', v);
      this.formElement.onSubmit(new Event('submit'));
    });
  }

  send() {
    console.log('register', this.personalForm.valid);
    if (!this.personalForm.valid) {
      return;
    }
    this.formSubmit.emit(this.personalForm);
  }
}
