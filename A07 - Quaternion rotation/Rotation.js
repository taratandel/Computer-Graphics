// these global variables are used to contain the current angles of the world
// HERE YOU WILL HAVE TO ADD ONE OR MORE GLOBAL VARIABLES TO CONTAIN THE ORIENTATION
// OF THE OBJECT

// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the -1 .. +1 range that tells the angular velocity of the world.
function updateWorld(rvx, rvy, rvz) {

	// compute the rotation matrix
	var out = [1, 0 ,0 ,0,  0, 1, 0, 0,  0, 0, 1, 0,  0, 0, 0, 1];			   

	return out;
}

