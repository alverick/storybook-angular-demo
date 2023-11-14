import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "./services/register.service";
import {Router} from "@angular/router";
import {MatStepper} from "@angular/material/stepper";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Storybook demo';
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false
  @ViewChild("stepper", {static: false}) stepper: MatStepper;
  doRegisterSubmit: Subject<boolean> = new Subject();
  doPersonalSubmit: Subject<boolean> = new Subject();
  doAdditionalSubmit: Subject<boolean> = new Subject();


  constructor(private _formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) {
  }

  validateRegisterForm() {
    this.doRegisterSubmit.next(true)
  }

  validatePersonalForm() {
    this.doPersonalSubmit.next(true)
  }

  validateAdditionalForm() {
    this.doAdditionalSubmit.next(true)
  }


  registerNext(form: FormGroup) {
    console.log(arguments, form)
    this.registerService.userData.register = form
    this.stepper.next();
  }

  personalNext(form: FormGroup) {
    console.log(arguments, form)
    this.registerService.userData.personal = form
    this.stepper.next();
  }
  additionalNext(form: FormGroup) {
    console.log(arguments, form)
    this.registerService.userData.additional = form
    this.stepper.next();
  }

}
