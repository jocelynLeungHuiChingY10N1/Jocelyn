function setup()
{
  //create a drawing service 700px wide, 500px tall
  // (length and height of the canvas)
  createCanvas(800,400);


}

function draw()
{
  //create a background using RGB values
  // I worked with Charles to create different background colours (such as
  //salmon pink,red, green, yellow)

  // salmon pink
  background(250,128,114)



  // change the paint brush to a specific color according to RGB values
  // (amount of paint dipped in)
  fill(213,306,0);



  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  // top left
  rect(0,0,50,50,756)


  // top right
  rect(800-50,0,50,50)

  // bottom left
  rect(200,400,600,800)

  // bottom right
  rect(300,12,24,400)

  //middle
  rect(1000,900,800)
