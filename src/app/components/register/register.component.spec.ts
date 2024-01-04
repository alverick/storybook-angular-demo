import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MATERIAL_ELM } from '../../app.module';
import { DisclaimerComponent } from '../disclaimer/disclaimer.component';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent, DisclaimerComponent],
      imports: [
        NoopAnimationsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        ...MATERIAL_ELM,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fill form', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const email = compiled.querySelector(
      '[formcontrolname="email"]'
    ) as HTMLInputElement;
    email.value = 'mail@mail.com';
    email.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.registerForm.value.email).toEqual('mail@mail.com');
  });

  it('show errors', () => {
    component.showButton = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const email = compiled.querySelector(
      '[formcontrolname="email"]'
    ) as HTMLInputElement;
    email.dispatchEvent(new Event('blur'));

    const username = compiled.querySelector(
      '[formcontrolname="username"]'
    ) as HTMLInputElement;
    username.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    const button = compiled.querySelector('button') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();
    const errors = compiled.querySelectorAll('mat-error');
    expect(errors.length).toEqual(2);
  });

  it('validate emit form submitted', () => {
    const formData = {
      email: 'email@email.com',
      username: 'username',
      firstname: 'firstname',
      lastname: 'lastname',
      password: 'passwordTest',
      passwordConfirm: 'passwordTest',
    };
    component.registerForm.patchValue(formData);
    fixture.detectChanges();

    jest.spyOn(component.formSubmitted, 'emit');
    component.register();
    expect(component.formSubmitted.emit).toHaveBeenCalledWith(formData);
  });

  it('validate emit form submit', () => {
    const formData = {
      email: 'email@email.com',
      username: 'username',
      firstname: 'firstname',
      lastname: 'lastname',
      password: 'passwordTest',
      passwordConfirm: 'passwordTest',
    };
    component.registerForm.patchValue(formData);
    fixture.detectChanges();

    jest.spyOn(component.formSubmit, 'emit');
    component.register();
    expect(component.formSubmit.emit).toHaveBeenCalledWith(
      expect.objectContaining({
        value: formData,
      })
    );
  });
});
