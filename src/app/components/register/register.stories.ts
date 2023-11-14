import { RegisterComponent } from './register.component';
import {
  applicationConfig,
  argsToTemplate,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import {
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
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
import { provideAnimations } from '@angular/platform-browser/animations';
import { DisclaimerComponent } from '../disclaimer/disclaimer.component';

const meta: Meta<RegisterComponent> = {
  title: 'UI/Register',
  component: RegisterComponent,
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
    template: `<app-register ${argsToTemplate(args)}></app-register>`,
  }),
};

export default meta;

type Story = StoryObj<RegisterComponent>;

export const Default: Story = {
  args: {
    showButton: true,
  },
};
