function move() {
	// Translate of +2 on the x axis, and -1 on the y axis
	var T1 =
		[
				1.0,		0.0,		0.0,		2.0,
				0.0,		1.0,		0.0,		-1.0,
				0.0,		0.0,		1.0,		0.0,
				0.0,		0.0,		0.0,		1.0
		];

	// Rotate of 45 degrees on the x axis
	let alpha = toRadians(45)
	var R1 =
		[
			1.0,		0.0,		0.0,		0.0,
			0.0,		Math.cos(alpha),		-Math.sin(alpha),		0.0,
			0.0,		Math.sin(alpha),		Math.cos(alpha),		0.0,
			0.0,		0.0,		0.0,		1.0
		];

	// Make the object 2 times smaller
	var S1 =
		[
			0.5,		0.0,		0.0,		0.0,
			0.0,		0.5,		0.0,		0.0,
			0.0,		0.0,		0.5,		0.0,
			0.0,		0.0,		0.0,		1.0
		];
	// Make the object 2 times longer on the z axis, and half on the other axis
	var S2 =
		[
			0.5,		0.0,		0.0,		0.0,
			0.0,		0.5,		0.0,		0.0,
			0.0,		0.0,		2.0,		0.0,
			0.0,		0.0,		0.0,		1.0
		];

	// Mirror over the z axis
	var S3 =
		[
			-1.0,		0.0,		0.0,		0.0,
			0.0,		-1.0,		0.0,		0.0,
			0.0,		0.0,		1.0,		0.0,
			0.0,		0.0,		0.0,		1.0
		];

	// Flatten over the z axis
	var S4 =
		[
			1.0,		0.0,		0.0,		0.0,
			0.0,		1.0,		0.0,		0.0,
			0.0,		0.0,		0.0,		0.0,
			0.0,		0.0,		0.0,		1.0
		];

	// Make a shear along the Y axis, with a factor of 1 along the x axis
	var H1 =
		[
			1.0,		1.0,		0.0,		0.0,
			0.0,		1.0,		0.0,		0.0,
			0.0,		0.0,		1.0,		0.0,
			0.0,		0.0,		0.0,		1.0
		];



	return [T1, R1, S1, S2, S3, S4, H1];
}

function toDegrees (angle) {
	return angle * (180 / Math.PI);
}

function toRadians (angle) {
	return angle * (Math.PI / 180);
}