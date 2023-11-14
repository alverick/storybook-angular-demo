import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-aditional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss'],
})
export class AdditionalComponent implements OnInit {
  @Input() submit: Subject<boolean> = new Subject();
  @Input() showButton: boolean = false;
  @Output() formSubmit = new EventEmitter<FormGroup>();
  @ViewChild('form', { static: false }) formElement: NgForm;
  additionalForm: FormGroup = new FormGroup({
    food: new FormControl('', [Validators.required]),
    pepperoni: new FormControl(false),
    mushroom: new FormControl(false),
    extracheese: new FormControl(false),
  });
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  ngOnInit() {
    this.submit.subscribe(v => {
      console.log('value is changing', v);
      this.formElement.onSubmit(new Event('submit'));
    });
  }

  send() {
    console.log('register', this.additionalForm.valid);
    if (!this.additionalForm.valid) {
      return;
    }
    this.formSubmit.emit(this.additionalForm);
  }
}
