import {Component, Input} from '@angular/core';
import {UserData} from "../../services/register.service";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  @Input() userData: UserData
}
