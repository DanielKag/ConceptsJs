import { Component, OnInit, Input } from '@angular/core';
import { DALService} from './dal.service';

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
  constructor(private DAL: DALService) { }

  public getInformation() : string {
    return this.DAL.getConcept(this.conceptName).information;
  }

  ngOnInit() {
  }

}
