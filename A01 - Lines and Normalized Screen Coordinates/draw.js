function draw() {
	// line(x1,y1, x2,y2)
	// draws a line from a point at Normalized screen coordinates x1,y1 to Normalized screen coordinates x2,y2

	// Here there are only three lines command, but to obtain the car you will need 8 of them
	line(0.3, 0.3,0.3,0.1);
  	line(0.3,0.1,0.5, 0.0);
  	line(0.5,0.0,0.5,-0.3);
  	line(-0.2, 0.3,-0.2,0.1);
  	line(-0.2,0.1,-0.5, 0.0);
  	line(-0.5,0.0,-0.5,-0.3);
  	line(-0.2,0.3,0.3,0.3);
  	line(-0.5,-0.3,0.5,-0.3);
}

function draw2() {
	// this function is to draw a circle
	calculateCirclePoints(0.0, 0.0, 0, 360, 1.0, 128);
	drawYin_Yang()
}

function drawYin_Yang() {
	calculateCirclePoints(0.0, -0.4, 0, 360, 0.2, 128);
	calculateCirclePoints(0.0, 0.4, 0, 360, 0.2, 128);
	calculateCirclePoints(0.0, 0.4, -90, 90, 0.4, 128);
	calculateCirclePoints(0.0, -0.4, 90, 270, 0.4, 128);
	calculateCirclePoints(0.0, 0.0, 0, 360, 0.8, 128);
}
function calculateCirclePoints(centerX, centerY, from_degree, to_degree, radius, polynom_aprrox) {
	let total_degree = to_degree - from_degree;
	calculed_angles = [from_degree];
	// calculation based on the poly nom approximation
	for(i = 0; i<polynom_aprrox - 1; i++) {
		// calculate the degree between two points to connects
		let circle_degree1 = from_degree + i*total_degree/polynom_aprrox
		let circle_degree2 = from_degree + (i+1)*total_degree/polynom_aprrox
		// the coordinate of the first points
		var x1 = radius * Math.cos(circle_degree1 * Math.PI / 180);
		var y1 = radius * Math.sin(circle_degree1 * Math.PI / 180);
		// the coordinates of the second point
		var x2 = radius * Math.cos(circle_degree2 * Math.PI / 180);
		var y2 = radius * Math.sin(circle_degree2 * Math.PI / 180);
		// draw a line between the two points
		line(centerX + x1, centerY + y1, centerX + x2, centerY + y2);
	}
}

