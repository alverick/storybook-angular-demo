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
import { RegisterService } from '../../services/register.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Input() submit: Subject<boolean> = new Subject();
  @Input() showButton = false;
  @Output() loadedForm = new EventEmitter<FormGroup>();
  @Output() formSubmit = new EventEmitter<FormGroup>();
  @ViewChild('form', { static: false }) formElement: NgForm;
  registerForm = new FormGroup(
    {
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      username: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      firstname: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      lastname: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      passwordConfirm: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    }
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
  );

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.submit.subscribe(v => {
      console.log('value is changing', v);
      this.formElement.onSubmit(new Event('submit'));
    });
    this.loadedForm.emit(this.registerForm);
  }

  register() {
    console.log('register', this.registerForm.valid);
    if (!this.registerForm.valid) {
      return;
    }
    this.formSubmit.emit(this.registerForm);
  }
}
