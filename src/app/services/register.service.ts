import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

export interface UserData {
  additional: FormGroup;
  personal: FormGroup;
  register: FormGroup;
}

export type People = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
};

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  userData = new FormGroup({
    register: new FormGroup(
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
    ),
    personal: new FormGroup({
      birthDate: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required]),
    }),
    additional: new FormGroup({
      food: new FormControl('', [Validators.required]),
      pepperoni: new FormControl(false),
      mushroom: new FormControl(false),
      extracheese: new FormControl(false),
    }),
  });

  constructor(private http: HttpClient) {
    // console.log('register service');
  }

  saveData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  }

  getPeopleData(id: number): Observable<People> {
    return this.http.get<People>(`https://swapi.dev/api/people/${id}/`);
  }
}
