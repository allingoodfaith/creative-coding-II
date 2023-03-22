class GoodCandy
{
    constructor(x,y,diameter)
    {
        this.x = x;
        this.y = y;
        this.diameter = 50;
         
    }

    drawCandy()
    {
        noStroke();
        fill(235,89,152);
        circle(this.x,this.y,this.diameter); 
    }

    getX()
    {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getdiameter() {
        return this.diameter;
    }
}