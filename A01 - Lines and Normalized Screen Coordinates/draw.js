function draw() {
	// line(x1,y1, x2,y2)
	// draws a line from a point at Normalized screen coordinates x1,y1 to Normalized screen coordinates x2,y2

	// Here there are only three lines command, but to obtain the car you will need 8 of them
	line(0.4, 0.4,-0.4,-0.4);
	line(0.4,-0.4,-0.4, 0.4);
	line(0.4,-0.3,-0.4,-0.3);
}

function draw2() {
	// this function is to draw a circle
	for(i = 0; i < 128; i++) {
		y = (i - 64)  / 127.0 * 1.6;
		line(0.4, y,-0.4, y);
	}
}