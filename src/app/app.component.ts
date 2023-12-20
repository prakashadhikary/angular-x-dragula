import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataWithoutSubGroup: any = [
    {
      id: 'active',
      label: 'Active',
      subGroup: [],
    },
    {
      label: 'Inactive',
      id: 'inactive',
      subGroup: [],
    },
  ];

  dataWithSubGroup: any = [
    {
      id: 'active',
      label: 'Active',
      subGroup: [
        {
          id: 'buybux_less',
          label: 'Buybox Less Than',
          subGroup: [
            {
              id: 'buybux_less',
              label: 'Buybox Less Than',
              subGroup: [
                { id: 'buybux_less', label: 'Buybox Less Than' },
                { id: 'buybux_greater', label: 'Buybux Greater Than' },
              ],
            },
            { id: 'buybux_greater', label: 'Buybux Greater Than' },
          ],
        },
        { id: 'buybux_greater', label: 'Buybux Greater Than' },
      ],
    },
    {
      label: 'Inactive',
      id: 'inactive',
      subGroup: [
        { id: 'buybux_less', label: 'Buybox Less Than' },
        { id: 'buybux_greater', label: 'Buybux Greater Than' },
      ],
    },
  ];

  normalizedGroup: any = {};

  ngOnInit(): void {
    this.dataWithSubGroup.forEach((group: any) => {
      if (group.hasOwnProperty('subGroup') && group.subGroup.length) {
        // If sub group exists
        group.subGroup.forEach((sg: any) => {
          const machineId = `${group.id}_${sg.id}`;
          this.normalizedGroup[machineId] = [];
        });
      } else {
        this.normalizedGroup[group.id] = [];
      }
    });

    console.log(this.normalizedGroup);
  }
}
