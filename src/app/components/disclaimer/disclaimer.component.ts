import { Component, Input } from '@angular/core';

/**
 * Disclaimer component
 */
@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss'],
})
export class DisclaimerComponent {
  /**
   * Mode for disclaimer
   */
  @Input() mode!: 'info' | 'warning';
  /**
   * Name of icon
   */
  @Input() icon!: string;
}
