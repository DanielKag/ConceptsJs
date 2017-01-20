import { Component, Input} from '@angular/core';
import { ConceptFactoryService } from '../implementations/concept-factory.service';

@Component({
  selector: 'app-title',
  template: `
    <h1>
      title: {{getTitle()}}
    </h1>
  `,
  styles: []
})
export class TitleComponent {

  @Input() conceptName: string;
  constructor(private conecptFactory: ConceptFactoryService) { }

  public getTitle(): string {
    return this.conecptFactory.getImplementation(this.conceptName).title();
  }
}
