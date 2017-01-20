import { Component, OnInit, Input } from '@angular/core';
import { ConceptFactoryService } from '../implementations/concept-factory.service';

@Component({
  selector: 'app-code-area',
  template: `
    <p>
      code-area:  {{getCode()}}
    </p>
  `,
  styles: []
})
export class CodeAreaComponent implements OnInit {
@Input() conceptName: string;
  constructor(private conceptFactory: ConceptFactoryService) { }

  public getCode(): string{
    // move to seperate util
    const rawCode: string = this.conceptFactory.getImplementation(this.conceptName).do.toString();

    return rawCode;
  }

  ngOnInit() {
  }

}
