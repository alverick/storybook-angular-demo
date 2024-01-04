import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RouterTestComponent } from './router-test.component';

describe('RouterTestComponent', () => {
  let component: RouterTestComponent;
  let fixture: ComponentFixture<RouterTestComponent>;

  it('should create', async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterTestComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('route param is render in page', async () => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return param === 'param' ? 'data-prueba' : undefined;
          },
        },
      },
    };

    await TestBed.configureTestingModule({
      declarations: [RouterTestComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.paramVal).toBe('data-prueba');
  });
});
