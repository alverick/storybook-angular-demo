import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { RegisterComponent } from './components/register/register.component';
import { PersonalComponent } from './components/personal/personal.component';
import { AdditionalComponent } from './components/aditional/additional.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { DoneComponent } from './components/done/done.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';

export const MATERIAL_ELM = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatStepperModule,
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PersonalComponent,
    AdditionalComponent,
    ConfirmComponent,
    DoneComponent,
    DisclaimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    // Angular Forms Imports
    ReactiveFormsModule,
    FormsModule,
    // Angular Material Imports
    ...MATERIAL_ELM,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
