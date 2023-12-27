import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MATERIAL_ELM } from '../../app.module';
import { AppRoutingModule } from '../../app-routing.module';
import { DisclaimerComponent } from './disclaimer.component';

describe('DisclaimerComponent', () => {
  let component: DisclaimerComponent;
  let fixture: ComponentFixture<DisclaimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisclaimerComponent],
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CommonModule,
        // Angular Forms Imports
        ReactiveFormsModule,
        FormsModule,
        ...MATERIAL_ELM,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DisclaimerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.mode = 'info';
    component.icon = 'home';
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
