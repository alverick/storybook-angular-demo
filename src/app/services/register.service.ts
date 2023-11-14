import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface UserData {
  additional: FormGroup;
  personal: FormGroup;
  register: FormGroup;
}

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  userData: UserData = {
    register: new FormGroup({}),
    personal: new FormGroup({}),
    additional: new FormGroup({}),
  };

  constructor() {
    console.log('register service');
  }

  saveData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 4000);
    });
  }
}
