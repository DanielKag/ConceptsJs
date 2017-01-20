import { Injectable } from '@angular/core';
import { ConceptRow} from './concept-row';

@Injectable()
export class DALService {

  private _db: {[name: string]: ConceptRow};
  constructor() {
    this._db = {};
    this._db['Genetics'] = {name: 'Genetics', information: 'This is genetics'};
  }

  public getConcept(conceptName: string) {
    return this._db[conceptName];
  }
}
