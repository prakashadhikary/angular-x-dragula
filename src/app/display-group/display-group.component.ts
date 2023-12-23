import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-group',
  templateUrl: './display-group.component.html',
  styleUrls: ['./display-group.component.scss'],
})
export class DisplayGroupComponent {
  @Input() dataWithSubGroup: any = [];
}
