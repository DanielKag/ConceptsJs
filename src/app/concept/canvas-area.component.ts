import { Component, OnInit ,Input} from '@angular/core';
import { Genetics } from '../implementations/genetics/genetics';
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
    <canvas id="myCanvas" resize></canvas>
  `,
  styles: []
})
export class CanvasAreaComponent implements OnInit {

  @Input() conceptName: string;
  constructor(private conceptFactory: ConceptFactoryService) { }

  ngOnInit() {
    this.conceptFactory.getImplementation(this.conceptName).do();
  }
}
