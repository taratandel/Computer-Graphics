// these global variables are used to contain the current angles of the world
// HERE YOU WILL HAVE TO ADD ONE OR MORE GLOBAL VARIABLES TO CONTAIN THE ORIENTATION
// OF THE OBJECT

// [θ, ψ, Φ]
let euler = [0.0, 0.0, 0.0];

// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the -1 .. +1 range that tells the angular velocity of the world.
function updateWorld(rvx, rvy, rvz) {

	euler[0] += rvx;
	euler[1] += rvy;
	euler[2] += rvz;

	// Quaternion.fromEuler(Φ, θ, ψ[, order="ZXY"])
	let q = new Quaternion.fromEuler(utils.degToRad(euler[2]), utils.degToRad(euler[0]), utils.degToRad(euler[1]));

	// compute the rotation matrix
	// by hand matrix if nor w,x ,y, z  = 1
	//
	// let a = q.w;
	// let b = q.x;
	// let c = q.y;
	// let d = q.z;
	//
	// let out = [
	// 	1-2.0*(c*c+d*d)	, 2.0*(b*c+a*d)		,	2.0*(b*d-a*c)		, 0.0,
	// 	2.0*(b*c-a*d)		, 1-2.0*(b*b+d*d)	,	2.0*(c*d+a*b)		, 0.0,
	// 	2.0*(b*d+a*c)		, 2.0*(c*d-a*b)		,	1-2.0*(b*b+c*c)	, 0.0,
	// 	0.0							, 0.0							,	0.0							, 1.0,
	// ];

	// using library
	let out = q.toMatrix4();


	return out;
}
