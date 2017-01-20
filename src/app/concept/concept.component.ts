import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-concept',
  template: `
      <app-title [conceptName]=conceptName></app-title>
       <app-information [conceptName]=conceptName></app-information>
      <app-canvas-area [conceptName]=conceptName></app-canvas-area>
      <app-code-area [conceptName]=conceptName></app-code-area>        
          `,
  styles: []
})
export class ConceptComponent {
  @Input() conceptName: string;
}
