import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-canvas-area',
  template: `
    <p>
      canvas-area : {{conceptName}}
    </p>
  `,
  styles: []
})
export class CanvasAreaComponent implements OnInit {
@Input() conceptName: string;
  constructor() { }

  ngOnInit() {
  }

}
