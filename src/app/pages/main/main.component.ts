import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
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
  isLinear = true;
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

  registerNext(form: FormGroup) {
    console.log(arguments, form);
    this.completedRegister = true;
    this.registerService.userData.controls.register.setValue(form.value);
    setTimeout(() => {
      this.stepper.next();
    }, 100);
  }

  personalNext(form: FormGroup) {
    console.log(arguments, form);
    this.completedPersonal = true;
    this.registerService.userData.controls.personal.setValue(form.value);
    setTimeout(() => {
      this.stepper.next();
    }, 100);
  }

  additionalNext(form: FormGroup) {
    console.log(arguments, form);
    this.completedAdditional = true;
    this.registerService.userData.controls.additional.setValue(form.value);
    setTimeout(() => {
      this.stepper.next();
    }, 100);
  }

  saveRemote() {
    console.log('saveRemote');
    this.registerService.userData.reset();
    this.registerService.saveData().then(() => {
      this.stepper.next();
      this.completedRegister = false;
      this.completedPersonal = false;
      this.completedAdditional = false;
      this.completedConfirm = false;
    });
  }
}
