import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptComponent } from './concept.component';
import { TitleComponent } from './title.component';
import { CanvasAreaComponent } from './canvas-area.component';
import { CodeAreaComponent } from './code-area.component';
import { InformationComponent } from './information.component';
import { DALService} from './dal.service';
import {ConceptFactoryService} from './../implementations/concept-factory.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConceptComponent, TitleComponent, CanvasAreaComponent, CodeAreaComponent, InformationComponent],
  exports : [ConceptComponent],
  providers : [DALService, ConceptFactoryService]
})
export class ConceptModule { }
