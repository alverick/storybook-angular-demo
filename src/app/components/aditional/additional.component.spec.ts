import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalComponent } from './additional.component';
import { MATERIAL_ELM } from '../../app.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AdditionalComponent', () => {
  let component: AdditionalComponent;
  let fixture: ComponentFixture<AdditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdditionalComponent],
      imports: [BrowserAnimationsModule, ReactiveFormsModule, ...MATERIAL_ELM],
    }).compileComponents();

    fixture = TestBed.createComponent(AdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
