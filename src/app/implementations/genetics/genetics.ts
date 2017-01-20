import {ConceptBase} from '../concept-base';

declare var paper : any;
declare var Path : any;
declare var view : any;

export class Genetics implements ConceptBase {

      public do(): void {

        paper.install(window);
    paper.setup('myCanvas');

    var background = new Path.Rectangle({
    point: [0, 0],
    size: [view.size.width, view.size.height],
    strokeColor: 'white'
});
background.sendToBack();
background.fillColor = '#5b5b5b';

		var path = new Path.Rectangle([75, 75], [100, 100]);
		path.strokeColor = 'black';

		view.onFrame = function(event) {
			// On each frame, rotate the path by 3 degrees:
			path.rotate(3);
		}

    }



}
