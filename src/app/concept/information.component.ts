import { Component, OnInit, Input } from '@angular/core';
import { ConceptFactoryService } from '../implementations/concept-factory.service';

@Component({
  selector: 'app-information',
  template: `
    <p>
      information:  {{getInformation()}}
    </p>
  `,
  styles: []
})
export class InformationComponent implements OnInit {

  @Input() conceptName: string;
  constructor(private conecptFactory: ConceptFactoryService) { }

  public getInformation(): string {
    return this.conecptFactory.getImplementation(this.conceptName).info();
  }

  ngOnInit() {
  }

}
