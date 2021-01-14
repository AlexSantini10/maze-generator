function removeWalls(a, b){
    var y = a.i - b.i;

    if(y === 1){
        a.wall.left = false;
        b.wall.right = false;
    }
    else if (y === -1){
        a.wall.right = false;
        b.wall.left = false;
    }

    var x = a.j - b.j;

    if(x === 1){
        a.wall.top = false;
        b.wall.bottom = false;
    }
    else if (x === -1){
        a.wall.bottom = false;
        b.wall.top = false;
    }
}

function index(i, j){
    if(i<0 || j<0 || i>=rows || j>=cols){
        return -1;
    }

    return i*cols + j;
}

function Cell(i, j){
    this.i = i;
    this.j = j;

    this.wall = new Wall();
    this.visited = false;

    this.checkNeighbors = function(){
        var neighbors = new Array();
        
        var top = grid[index(i-1, j)];
        var right = grid[index(i, j+1)];
        var bottom = grid[index(i+1, j)];
        var left = grid[index(i, j-1)];

        if(top && !top.visited){
            neighbors.push(top);
        }
        if(right && !right.visited){
            neighbors.push(right);
        }
        if(bottom && !bottom.visited){
            neighbors.push(bottom);
        }
        if(left && !left.visited){
            neighbors.push(left);
        }


        if(neighbors.length > 0){
            var r = floor(random(0, neighbors.length));
            return neighbors[r];
        }
        else{
            return undefined;
        }
    }

    this.highlight = function(){
        var x = this.i*w;
        var y = this.j*w;
        noStroke();
        fill(0, 255, 0, 100);
        rect(x,y,w,w);
    }

    this.show = function(){
        var x = this.i*w;
        var y = this.j*w;
        stroke(255);
        if(this.wall.top){
            line(x, y, x+w, y);
        }
        if(this.wall.right){
            line(x+w, y, x+w, y+w);
        }
        if(this.wall.bottom){
            line(x+w, y+w, x, y+w);
        }
        if(this.wall.left){
            line(x, y+w, x, y);
        }
        
        if(this.visited){
            noStroke();
            fill(255, 0, 255, 100);
            rect(x,y,w,w);
        }

    }
}

function Wall(){
    this.top = true;
    this.bottom = true;
    this.right = true;
    this.left = true;
}