import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-area',
  template: `
    <p>
      code-area:  {{conceptName}}
    </p>
  `,
  styles: []
})
export class CodeAreaComponent implements OnInit {
@Input() conceptName: string;
  constructor() { }

  ngOnInit() {
  }

}
