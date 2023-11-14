import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './services/register.service';
import { Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Storybook demo';
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  completedRegister = false;
  completedPersonal = false;
  completedAdditional = false;
  completedConfirm = false;
  isLinear = false;
  @ViewChild('stepper', { static: false }) stepper: MatStepper;
  doRegisterSubmit: Subject<boolean> = new Subject();
  doPersonalSubmit: Subject<boolean> = new Subject();
  doAdditionalSubmit: Subject<boolean> = new Subject();

  constructor(
    private _formBuilder: FormBuilder,
    protected registerService: RegisterService,
    private router: Router
  ) {}

  validateRegisterForm() {
    this.doRegisterSubmit.next(true);
  }

  validatePersonalForm() {
    this.doPersonalSubmit.next(true);
  }

  validateAdditionalForm() {
    this.doAdditionalSubmit.next(true);
  }

  saveForm(form: FormGroup, elm: string) {
    this.registerService.userData = {
      ...this.registerService.userData,
      [elm]: form,
    };
    console.log(arguments, form, elm, this.registerService.userData);
  }

  registerNext(form: FormGroup) {
    console.log(arguments, form);
    this.completedRegister = true;
    this.registerService.userData.register = form;
    setTimeout(() => {
      this.stepper.next();
    }, 100);
  }

  personalNext(form: FormGroup) {
    console.log(arguments, form);
    this.completedPersonal = true;
    this.registerService.userData.personal = form;
    setTimeout(() => {
      this.stepper.next();
    }, 100);
  }

  additionalNext(form: FormGroup) {
    console.log(arguments, form);
    this.completedAdditional = true;
    this.registerService.userData.additional = form;
    setTimeout(() => {
      this.stepper.next();
    }, 100);
  }

  saveRemote() {
    console.log('saveRemote');
    this.registerService.userData.register.reset();
    this.registerService.saveData().then(() => {
      this.registerService.userData.personal.reset();
      this.registerService.userData.additional.reset();
      this.stepper.next();
      this.completedRegister = false;
      this.completedPersonal = false;
      this.completedAdditional = false;
      this.completedConfirm = false;
    });
  }
}
