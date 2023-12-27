import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MATERIAL_ELM } from './app.module';
import { RegisterComponent } from './components/register/register.component';
import { PersonalComponent } from './components/personal/personal.component';
import { AdditionalComponent } from './components/aditional/additional.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { DoneComponent } from './components/done/done.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        ...MATERIAL_ELM,
      ],
      declarations: [
        AppComponent,
        RegisterComponent,
        PersonalComponent,
        AdditionalComponent,
        ConfirmComponent,
        DoneComponent,
        DisclaimerComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Jest demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Jest demo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.toolbar span')?.textContent).toContain(
      'App'
    );
  });
});
