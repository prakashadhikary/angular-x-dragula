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
      id: 'group_1',
      label: 'Active',
      subGroup: [
        {
          id: 'group_1_1',
          label: 'Buybox Less Than',
          subGroup: [
            {
              id: 'group_1_1_1',
              label: 'Buybox Less Than',
              subGroup: [
                {
                  id: 'group_1_1_1_1',
                  label: 'Buybox Less Than',
                  subGroup: [],
                },
                {
                  id: 'group_1_1_1_2',
                  label: 'Buybux Greater Than',
                  subGroup: [],
                },
              ],
            },
            { id: 'group_1_1_2', label: 'Buybux Greater Than', subGroup: [] },
          ],
        },
        { id: 'group_1_2', label: 'Buybux Greater Than', subGroup: [] },
      ],
    },
    {
      label: 'Inactive',
      id: 'group_2',
      subGroup: [
        { id: 'group_2_1', label: 'Buybox Less Than', subGroup: [] },
        { id: 'group_2_2', label: 'Buybux Greater Than', subGroup: [] },
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

          if (sg.hasOwnProperty('subGroup') && sg.subGroup.length) {
            this.normalizeSubGroups(group.id, sg.subGroup);
          }
        });
      } else {
        this.normalizedGroup[group.id] = [];
      }
    });

    console.log(this.normalizedGroup);
  }

  normalizeSubGroups(parentId: any, subGroups: any) {
    subGroups.forEach((subGroup: any) => {
      const machineId = `${parentId}_${subGroup.id}`;
      this.normalizedGroup[machineId] = [];

      if (subGroup.hasOwnProperty('subGroup') && subGroup.subGroup.length) {
        this.normalizeSubGroups(machineId, subGroup.subGroup);
      }
    });
  }
}
