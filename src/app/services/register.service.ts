import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";

interface UserData {
  additional: FormGroup | null;
  personal: FormGroup | null;
  register: FormGroup | null
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  userData: UserData = {
    register: null,
    personal: null,
    additional: null
  }

  constructor() {
    console.log('register service')
  }

  saveRegister(data: FormGroup) {
    console.log('saveRegister', data)
    this.userData.register = data
  }
}
