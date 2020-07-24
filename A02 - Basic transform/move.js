function move() {
	// Translate of +2 on the x axis, and -1 on the y axis
	// |1 0 0 dx|
	// |0 1 0 dy|
	// |0 0 1 dz|
	// |0 0 0 1 |
	var T1 =
		[
				1.0,		0.0,		0.0,		2.0,
				0.0,		1.0,		0.0,		-1.0,
				0.0,		0.0,		1.0,		0.0,
				0.0,		0.0,		0.0,		1.0
		];

	// Rotate of 45 degrees on the x axis
	// ################################## //
	// Rx(α)=
	// |1 0     0    0|
	// |0 cosα −sinα 0|
	// |0 sinα  cosα 0|
	// |0 0     0    1|
	// ################################## //
	// Ry(α)=
	// |cosα  0 sinα 0|
	// |0     1  0   0|
	// |−sinα 0 cosα 0|
	// |0     0 0    1|
	// ################################## //
	// Rz(α)=
	// |cosα −sinα 0 0|
	// |sinα  cosα 0 0|
	// |0     0    1 0|
	// |0     0    0 1|
	let alpha = toRadians(45)
	var R1 =
		[
			1.0,		0.0,		0.0,		0.0,
			0.0,		Math.cos(alpha),		-Math.sin(alpha),		0.0,
			0.0,		Math.sin(alpha),		Math.cos(alpha),		0.0,
			0.0,		0.0,		0.0,		1.0
		];

	// Make the object 2 times smaller
	// |sx 0  0  0|
	// |0  sy 0  0|
	// |0  0  sz 0|
	// |0  0  0  1|
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
	// It is obtained by assigning -1 to all the scaling factors but the one of the axis
	var S3 =
		[
			-1.0,		0.0,		0.0,		0.0,
			0.0,		-1.0,		0.0,		0.0,
			0.0,		0.0,		1.0,		0.0,
			0.0,		0.0,		0.0,		1.0
		];

	// Flatten over the z axis
	//remove the 1 on the desired axis
	var S4 =
		[
			1.0,		0.0,		0.0,		0.0,
			0.0,		1.0,		0.0,		0.0,
			0.0,		0.0,		0.0,		0.0,
			0.0,		0.0,		0.0,		1.0
		];

	// Make a shear along the Y axis, with a factor of 1 along the x axis
	// ################################## //
	// Hx(hy,hz)=
	//|1  0 0 0|
	//|hy 1 0 0|
	//|hz 0 1 0|
	//|0  0 0 1|
	// ################################## //
	//Hy(hx,hz)=
	// |0 hz 1 0|
	// |1 hx 0 0|
	// |0 1  0 0|
	// |0 0  0 1|
	// ################################## //
	//Hz(hx,hy)=
	// |0 0  1 0|
	// |1 0 hx 0|
	// |0 1 hy 0|
	// |0 0 0  1|
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