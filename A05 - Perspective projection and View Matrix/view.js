function view(cx, cy, cz, alpha, beta, rho) {
	// Create a view matrix for a camera in position cx, cy and cz, looking in the direction specified by
	// alpha, beta and rho, as outlined in the course slides.
	var out = [
		1.0	,	0.0,	0.0,	0.0		,
		0.0	,	1.0,	0.0,	0.0		,
		0.0	,	0.0,	1.0,	-50.0	,
		0.0	,	0.0,	0.0,	1.0
	];

	let t =
		[
			1.0	,	0.0,	0.0,	-cx,
			0.0	,	1.0,	0.0,	-cy,
			0.0	,	0.0,	1.0,	-cz,
			0.0	,	0.0,	0.0,	1.0
		];


	let d = utils.degToRad(-alpha);
	let cosa = Math.cos(d);
	let sina = Math.sin(d);
	let ry =
		[
			cosa	,	0.0		,	sina		,	0.0			,
			0.0		,	1.0		,	0.0			,	0.0			,
			-sina	,	0.0		,	cosa		,	0.0			,
			0.0		,	0.0		,	0.0			,	1.0
		];

	d = utils.degToRad(-beta);
	let cosb = Math.cos(d);
	let sinb = Math.sin(d);
	let rx =
		[
			1.0		,	0.0		,	0.0			,	0.0			,
			0.0		,	cosb	,	-sinb		,	0.0			,
			0.0		,	sinb	,	cosb		,	0.0			,
			0.0		,	0.0		,	0.0			,	1.0
		];

	d = utils.degToRad(-rho);
	let cosr = Math.cos(d);
	let sinr = Math.sin(d);
	let rz =
		[
			cosr	,	-sinr	,	0.0			,	0.0			,
			sinr	,	cosr	,	0.0			,	0.0			,
			0.0		,	0.0		,	1.0			,	0.0			,
			0.0		,	0.0		,	0.0			,	1.0
		];


	tmp = utils.multiplyMatrices(ry, t);
	tmp = utils.multiplyMatrices(rx, tmp);
	out = utils.multiplyMatrices(rz, tmp);

	return out;
}

