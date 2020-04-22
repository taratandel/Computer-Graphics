function buildGeometry() {
	var i;
	
	// Draws a cube (replace the vertices)
	var vert1 = [[-1.0,-1.0,-1.0], [0.0,-1.0,-1.0], [-1.0,0.0,-1.0], [0.0,-1.0, -1.0], [0.0,0.0, -1.0], [-1.0, 0.0, -1.0],
		[0.0,-1.0,-1.0], [0.0,-1.0,0.0], [0.0,0.0,-1.0], [0.0,-1.0, 0.0], [0.0,0.0, 0.0], [0.0, 0.0, -1.0],
		[-1.0,-1.0,-1.0], [-1.0,-1.0,0.0], [-1.0,0.0,0.0], [-1.0,0.0, 0.0], [-1.0,0.0, -1.0], [-1.0, -1.0, -1.0],
		[-1.0,-1.0,-1.0], [-1.0,-1.0,0.0], [0.0,-1.0,0.0], [0.0,-1.0, 0.0], [0.0,-1.0, -1.0], [-1.0, -1.0, -1.0],
		[-1.0,0.0,-1.0], [0.0,0.0,-1.0], [-1.0,0.0,0.0], [-1.0,0.0, 0.0], [0.0,0.0, 0.0], [0.0, 0.0, -1.0],
		[-1.0,0.0,0.0], [0.0,0.0,0.0], [-1.0,-1.0,0.0], [-1.0,-1.0, 0.0], [0.0,-1.0, 0.0], [0.0, 0.0, 0.0]];
	addMesh(vert1, "L", [1.0, 0.0, 0.0]);


	// Draws a flat L-shaped pattern (replace the vertices)
	var vert2 = [[-1.0,-1.0,-1.0], [1.0,-1.0,-1.0], [1.0, 1.0,-1.0], [-1.0, 1.0,-1.0], [-1.0,-1.0, 1.0], [1.0,-1.0, 1.0], [1.0, 1.0, 1.0], [-1.0, 1.0, 1.0]];

	addMesh(vert2, "S", [0.0, 0.0, 1.0]);

	let coordinates = calculatingHexagonVertixCoordinates(0,0,1)
	// Draws a flat hexagon (replace the vertices)
	var vert3 = [[0.0,0.0, 0.0], coordinates[0], coordinates[1], coordinates[2], coordinates[3],
		coordinates[4], coordinates[5], coordinates[6]
	];

	addMesh(vert3, "F", [0.0, 1.0, 0.0]);
	
}

function calculatingHexagonVertixCoordinates(centerX, centerY, size) {
	var coordinates = []
	for (i = 0; i < 7; i++) {
		coordinates.push([(size*Math.cos(utils.degToRad(0+i*60)))+centerX,(size*Math.sin(utils.degToRad(0+i*60)))+centerY, 0.0])
	}
	return coordinates
}