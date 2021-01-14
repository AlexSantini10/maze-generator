var cols, rows;
var dims = 600;
var w = 20;
var grid = new Array();
var current;    //Cella corrente
var finished=false;

var stack = new Array();

function setCanvas(){
	document.getElementById('defaultCanvas0').style.marginLeft = String((window.screen.width/2)-(dims/2)) + 'px';
	document.getElementById('defaultCanvas0').style.marginTop = String((window.screen.height/2)-(dims/2)) + 'px';
}

function setup(){
    createCanvas(dims, dims);
	setCanvas();
    frameRate(40);
	//document.getElementById('defaultCanvas0').style.border = '1px solid white';

    cols = floor(dims/w);
    rows = floor(dims/w);

    for(var i=0; i<rows; ++i){
        for(var j=0; j<cols; ++j){
            var cell = new Cell(i,j);
            grid.push(cell);
        }
    }

    current = grid[0];

}

function draw(){
    background(47, 57, 58);

    for(var i=0; i<grid.length; ++i){
        grid[i].show();
    }

    current.visited = true;
    current.highlight();

    var next = current.checkNeighbors();

    if(next){
        next.visited=true;

        stack.push(current);

        removeWalls(current, next);

        current = next;
    }
    else if(stack.length>0){
        current = stack.pop();
        
    }
	else if(stack.length===0 && !finished){
		//alert('Finito');
		console.log('Finito');
		finished=true;
	}
}

