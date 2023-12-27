import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneComponent } from './done.component';
import { MATERIAL_ELM } from '../../app.module';

describe('DoneComponent', () => {
  let component: DoneComponent;
  let fixture: ComponentFixture<DoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoneComponent],
      imports: [...MATERIAL_ELM],
    }).compileComponents();

    fixture = TestBed.createComponent(DoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
