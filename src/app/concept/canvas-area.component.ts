import { Component, OnInit, AfterViewInit, Input} from '@angular/core';
import { ConceptFactoryService } from '../implementations/concept-factory.service';

declare var paper : any;
declare var Path : any;
declare var view : any;

@Component({
  selector: 'app-canvas-area',
  template: `
    <p>
      canvas-area : {{conceptName}}
    </p>
    <canvas [id]="conceptName" resize></canvas>
  `,
  styles: []
})
export class CanvasAreaComponent implements AfterViewInit {

  @Input() conceptName: string;
  constructor(private conceptFactory: ConceptFactoryService) { }

  ngAfterViewInit() {
    this.conceptFactory.getImplementation(this.conceptName).do(this.conceptName);
  }
}
