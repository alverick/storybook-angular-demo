import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdditionalComponent } from './components/additional/additional.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { DoneComponent } from './components/done/done.component';
import { PersonalComponent } from './components/personal/personal.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { RouterTestComponent } from './pages/router-test/router-test.component';

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
    RouterTestComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
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
