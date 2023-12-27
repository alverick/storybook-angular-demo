import { ConfirmComponent } from './confirm.component';
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DisclaimerComponent } from '../disclaimer/disclaimer.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';

const meta: Meta<ConfirmComponent> = {
  title: 'UI/Confirm',
  component: ConfirmComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
    moduleMetadata({
      declarations: [DisclaimerComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatCheckboxModule,
        MatStepperModule,
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<ConfirmComponent>;

const data = {
  register: {
    email: 'email@email.com',
    username: 'username',
    firstname: 'firstname',
    lastname: 'lastname',
    password: 'password',
    passwordConfirm: 'passwordConfirm',
  },
  personal: {
    birthDate: 'birthDate',
    address: 'address',
    city: 'city',
    state: 'state',
    zip: 'zip',
  },
  additional: {
    food: 'food',
    pepperoni: true,
    mushroom: false,
    extracheese: false,
  },
};
export const Default: Story = {
  args: {
    userData: data,
  },
};
