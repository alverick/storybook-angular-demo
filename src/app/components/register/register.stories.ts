import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';

import { DisclaimerComponent } from '../disclaimer/disclaimer.component';
import { RegisterComponent } from './register.component';

const meta: Meta<RegisterComponent> = {
  title: 'UI/Register',
  component: RegisterComponent,
  tags: ['autodocs'],
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
  render: ({ ...args }) => ({
    props: args,
  }),
};

export default meta;

type Story = StoryObj<RegisterComponent>;

export const Default: Story = {
  args: {
    showButton: true,
  },
};
