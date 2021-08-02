class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1= loadImage("sprites/smoke.png");
    this.t = []
  }

  display() {
    super.display();

    if (this.body.position.x>200 && this.body.velocity.x>10){
      var p = [this.body.position.x, this.body.position.y]
      this.t.push(p)
    }
    
   

    //initialization, condition, increment/decrement
    for (var i = 0; i<this.t.length; i++){
      image(this.image1, this.t[i][0], this.t[i][1])
    }
  }
}



//t = trajectory(path followed by the bird)
//     00  01     10  11    20  21    30  31
//t =[ [x1,y1],  [x2,y2],  [x3,y3],  [x4,y4]...]
//[i][0]  [i][1]