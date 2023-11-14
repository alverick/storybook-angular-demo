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

const registerForm = new FormGroup({
  email: new FormControl('mail@mail.com', {
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
});

console.log(registerForm);

const data = {
  register: registerForm,
  personal: new FormGroup({}),
  additional: new FormGroup({}),
};
export const Default: Story = {
  args: {
    userData: data,
  },
};
