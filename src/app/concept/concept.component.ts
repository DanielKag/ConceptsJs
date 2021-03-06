import { ActivatedRoute } from '@angular/router';
import {
    Component,
    ComponentFactoryResolver,
    DoCheck,
    Input,
    OnChanges,
    OnInit,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {CanvasAreaComponent} from './canvas-area.component';

@Component({
  selector: 'app-concept',
  template: `
      <app-title [conceptName]=conceptName></app-title>
       <app-information [conceptName]=conceptName></app-information>
      <!--<app-canvas-area [conceptName]=conceptName></app-canvas-area>-->
      <span #canvasContainer></span>
      <app-code-area [conceptName]=conceptName></app-code-area>        
          `,
  styles: []
})
export class ConceptComponent implements DoCheck, OnInit {
  @Input() conceptName: string;
  @ViewChild('canvasContainer', {read: ViewContainerRef}) canvasContainer: ViewContainerRef;
  private canvasFactory = this.resolver.resolveComponentFactory(CanvasAreaComponent);
  private currentConcept: string;

  id: number;
  private sub: any;


  constructor(
    private resolver: ComponentFactoryResolver,
    private route: ActivatedRoute) {}

  public ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.conceptName = params['name'];
    });
  }

  public ngDoCheck() {

    if (this.currentConcept !== this.conceptName) {
      this.canvasContainer.clear();
      const newCanvas = this.canvasContainer.createComponent(this.canvasFactory);
      newCanvas.instance.conceptName = this.conceptName;
      this.currentConcept = this.conceptName;
    }
  }
}
