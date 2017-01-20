import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <p>
      title: {{conceptName}}
    </p>
  `,
  styles: []
})
export class TitleComponent implements OnInit {

@Input() conceptName: string;
  constructor() { }

  ngOnInit() {
  }

}
