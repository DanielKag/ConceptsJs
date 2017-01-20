import {ConceptBase} from './concept-base';
import {Genetics} from './genetics/genetics';

export class ConceptFactory {

    static repository: {[name: string]: ConceptBase};

    constructor() {
        ConceptFactory.repository['genetics'] = new Genetics();
    }

    public getImplementation(name: string): ConceptBase {
        return ConceptFactory[name];
    }
}
