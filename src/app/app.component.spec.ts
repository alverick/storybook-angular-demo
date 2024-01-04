import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MATERIAL_ELM } from './app.module';
import { People } from './services/register.service';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        ...MATERIAL_ELM,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Jest demo'`, () => {
    expect(app.title).toEqual('Jest demo');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.toolbar span')?.textContent).toContain(
      'App'
    );
  });

  it('load name people from service', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const dummyData: Partial<People> = {
      name: 'Luke Skywalker',
    };

    const request = httpMock.expectOne('https://swapi.dev/api/people/2/');
    expect(request.request.method).toBe('GET');
    request.flush(dummyData);

    fixture.detectChanges();

    const nameElm = compiled.querySelector('span.name');

    expect(nameElm?.textContent?.toLocaleLowerCase()).toContain(
      dummyData.name?.toLocaleLowerCase()
    );
  });
});
