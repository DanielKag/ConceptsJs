import { Injectable } from '@angular/core';
import {ConceptBase} from './concept-base';
import {Genetics} from './genetics/genetics';

@Injectable()
export class ConceptFactoryService {

   private repository: {[name: string]: ConceptBase};

    constructor() {
        this.repository = {};
        this.repository['Genetics'] = new Genetics();
    }

    public getImplementation(name: string): ConceptBase {
        return this.repository[name];
    }
}
