import { Component } from '@angular/core';

@Component({
  selector: 'sc-equpment-entry',
  template: `<div class="remote-entry">
    <h2>equpment's Remote Entry Component</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
