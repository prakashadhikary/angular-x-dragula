import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
})
export class DragDropComponent {
  leftList = [
    '1. Lorem ipsum dolor sit amet, consectetur adip',
    '2. Lorem ipsum dolor sit amet, consectetur adip',
    '3. Lorem ipsum dolor sit amet, consectetur adip',
    '4. Lorem ipsum dolor sit amet, consectetur adip',
    '5. Lorem ipsum dolor sit amet, consectetur adip',
  ];

  rightList = [
    '10. Lorem ipsum dolor sit amet',
    '11. Lorem ipsum dolor sit amet',
    '12. Lorem ipsum dolor sit amet',
    '13. Lorem ipsum dolor sit amet',
    '14. Lorem ipsum dolor sit amet',
  ];

  // RxJS Subscription is an excellent API for managing many unsubscribe calls.
  // See note below about unsubscribing.
  subs = new Subscription();

  constructor(private dragulaService: DragulaService) {
    this.dragulaService.createGroup('VAMPIRES', {});

    // These will get events limited to the VAMPIRES group.

    this.subs.add(
      this.dragulaService.drag('VAMPIRES').subscribe((obj) => {
        // ...
        // console.log('Drag', obj);
      })
    );
    this.subs.add(
      this.dragulaService.drop('VAMPIRES').subscribe((obj) => {
        // ...
        // console.log('Drop', obj);
      })
    );
    // some events have lots of properties, just pick the ones you need
    this.subs.add(
      this.dragulaService
        .dropModel('VAMPIRES')
        // WHOA
        // .subscribe(({ name, el, target, source, sibling, sourceModel, targetModel, item }) => {
        .subscribe((obj) => {
          // ...
          console.log('DropModel', obj);
        })
    );
  }

  ngOnDestroy() {
    // destroy all the subscriptions at once
    this.subs.unsubscribe();
  }
}
