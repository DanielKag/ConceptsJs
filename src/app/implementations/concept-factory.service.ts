import { Injectable } from '@angular/core';
import {ConceptBase} from './concept-base';
import {Genetics} from './genetics/genetics';
import {BubbleSort} from './bubble-sort/bubble-sort';

@Injectable()
export class ConceptFactoryService {

   private repository: {[name: string]: ConceptBase};

    constructor() {
        this.repository = {};
        this.repository['Genetics'] = new Genetics();
        this.repository['BubbleSort'] = new BubbleSort();
    }

    public getImplementation(name: string): ConceptBase {
        return this.repository[name];
    }
}
