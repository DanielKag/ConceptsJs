import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptComponent } from './concept.component';
import { TitleComponent } from './title.component';
import { CanvasAreaComponent } from './canvas-area.component';
import { CodeAreaComponent } from './code-area.component';
import { InformationComponent } from './information.component';
import {ConceptFactoryService} from './../implementations/concept-factory.service';

@NgModule({
  imports: [
    CommonModule
  ],
  entryComponents: [CanvasAreaComponent],
  declarations: [ConceptComponent, TitleComponent, CanvasAreaComponent, CodeAreaComponent, InformationComponent],
  exports : [ConceptComponent],
  providers : [ConceptFactoryService]
})
export class ConceptModule { }
