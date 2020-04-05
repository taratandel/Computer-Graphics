function axonometry() {
	// Make an isometric view, w = 50, a = 16/9, n = 1, f = 101.
	let w = 50.0;
	let a = 16.0 / 9.0;
	let n = 1;
	let f = 101;
	let p = utils.MakeParallel(w, a, n ,f);

	var A1 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	let alpha = utils.MakeRotateXMatrix(35.26); // isometric must rotate x-axis ±32.26
	let beta = utils.MakeRotateYMatrix(45.0); // isometric must rotate y-axis ±45.0

	// parallel orthogonal x (x rotation) x (y rotation)
	A1 = utils.multiplyMatrices(p, alpha);
	A1 = utils.multiplyMatrices(A1, beta);
			   
	// Make a dimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated 20 around the x-axis
	var A2 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	alpha = utils.MakeRotateXMatrix(20); // dimetric project ask for rotate x-axis 20
	beta = utils.MakeRotateYMatrix(45.0); // dimetric must rotate y-axis ±45.0

	// parallel orthogonal x (x rotation) x (y rotation)
	A2 = utils.multiplyMatrices(p, alpha);
	A2 = utils.multiplyMatrices(A2, beta);

			   
	// Make a trimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated -30 around the x-axis and 30 around the y-axis
	var A3 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	alpha = utils.MakeRotateXMatrix(-30); // trimetric project ask for rotate x-axis -30.0
	beta = utils.MakeRotateYMatrix(30); // trimetric project ask for rotate y-axis 30.0

	// parallel orthogonal x (x rotation) x (y rotation)
	A3 = utils.multiplyMatrices(p, alpha);
	A3 = utils.multiplyMatrices(A3, beta);
			   
	// Make an cavalier projection view, w = 50, a = 16/9, n = 1, f = 101, at 45 degrees

	delete(alpha); // just unbind alpha :D

	var O1 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	let ro = 1.0; // in cavalier length maintained so ro is always 1
	alpha = 45.0;

	let t = [
		1.0,		0.0,		-ro*Math.cos(utils.degToRad(alpha))	,		0.0,
		0.0,		1.0,		-ro*Math.sin(utils.degToRad(alpha))	,		0.0,
		0.0,		0.0,		1.0																	,		0.0,
		0.0,		0.0,		0.0																	,		1.0
	];

	O1 = utils.multiplyMatrices(p, t);

	// Make a cabinet projection view, w = 50, a = 16/9, n = 1, f = 101, at 60 degrees
	var O2 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	ro = 0.5;
	alpha = 60.0;

	t = [
		1.0,		0.0,		-ro*Math.cos(utils.degToRad(alpha))	,		0.0,
		0.0,		1.0,		-ro*Math.sin(utils.degToRad(alpha))	,		0.0,
		0.0,		0.0,		1.0																	,		0.0,
		0.0,		0.0,		0.0																	,		1.0
	];

	O2 = utils.multiplyMatrices(p, t);

	return [A1, A2, A3, O1, O2];
}