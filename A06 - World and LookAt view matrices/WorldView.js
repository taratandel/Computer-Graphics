function worldViewProjection(carx, cary, carz, cardir, camx, camy, camz) {
// Computes the world, view and projection matrices for the game.

// carx, cary and carz encodes the position of the car.
// Since the game is basically in 2D, camdir contains the rotation about the y-axis to orient the car

// The camera is placed at position camx, camy and camz. The view matrix should be computed using the
// LookAt camera matrix procedure, with the correct up-vector.


	let carPosition = [carx, cary, carz, cardir];
	let camPosition = [camx, camy, camz];
	let world = createWorldMatrix(carPosition);
	let view = createViewMatrix(carPosition, camPosition);


	return [world, view];
}

function subtract(vector1, vector2) {
	let result = [];
	for (let i = 0; i < 3; i++) {
		result.push(vector1[i] - vector2[i]);
	}
	return result;
}

function createWorldMatrix(carPosition) {
	let translateMatrix = utils.MakeTranslateMatrix(carPosition[0], carPosition[1], carPosition[2]);
	let Ry = utils.MakeRotateYMatrix(carPosition[3]);
	let Rx = utils.MakeRotateXMatrix(0);
	let Rz = utils.MakeRotateZMatrix(0);
	let scaleMatrix = utils.MakeScaleMatrix(1);


	let world = utils.multiplyMatrices(translateMatrix, Ry);
	world = utils.multiplyMatrices(world, Rx);
	world = utils.multiplyMatrices(world, Rz);
	world = utils.multiplyMatrices(world,scaleMatrix);

	return world;
}

function createViewMatrix(carPosition,camPosition) {
	let c = camPosition;
	let a = [carPosition[0], carPosition[1], carPosition[2]];
	let u = [0, 1, 0];

	let vzn = subtract(c,a);
	vzn = utils.normalizeVector3(vzn);

	let vxn = utils.crossVector(u, vzn);
	vxn = utils.normalizeVector3(vxn);

	let vy = utils.crossVector(vzn, vxn);

	var Mc = [vxn[0], vy[0], vzn[0], c[0],
		vxn[1], vy[1], vzn[1], c[1],
		vxn[2], vy[2], vzn[2], c[2],
		0,     0,     0,     1];

	let view = utils.invertMatrix(Mc);
	return view;
}