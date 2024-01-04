import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MATERIAL_ELM } from '../../app.module';
import { AdditionalComponent } from '../../components/additional/additional.component';
import { ConfirmComponent } from '../../components/confirm/confirm.component';
import { DisclaimerComponent } from '../../components/disclaimer/disclaimer.component';
import { DoneComponent } from '../../components/done/done.component';
import { PersonalComponent } from '../../components/personal/personal.component';
import { RegisterComponent } from '../../components/register/register.component';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        RegisterComponent,
        PersonalComponent,
        AdditionalComponent,
        ConfirmComponent,
        DoneComponent,
        DisclaimerComponent,
      ],
      imports: [
        HttpClientTestingModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        ...MATERIAL_ELM,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('run register next', done => {
    const registerDebugElement = fixture.debugElement.query(
      By.directive(RegisterComponent)
    );
    const registerComponent: RegisterComponent =
      registerDebugElement.componentInstance;

    const formData = {
      email: 'email@email.com',
      username: 'username',
      firstname: 'firstname',
      lastname: 'lastname',
      password: 'passwordTest',
      passwordConfirm: 'passwordTest',
    };
    registerComponent.registerForm.patchValue(formData);
    fixture.detectChanges();

    registerComponent.formSubmit.emit(registerComponent.registerForm);
    fixture.detectChanges();
    setTimeout(() => {
      expect(component.stepper.selectedIndex).toEqual(1);
      done();
    }, 120);
  });
});
