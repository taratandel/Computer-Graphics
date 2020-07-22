function anim() {
	return [
 [2, [0,0,0],   Quaternion.fromAxisAngle([1,0,0],utils.degToRad(0)),
 	 [4,0,0],   Quaternion.fromAxisAngle([1,0,0],utils.degToRad(-60)),
 	 [10,0,0],   Quaternion.fromAxisAngle([0,1,0],utils.degToRad(90)),
 	 [8,0,0],   Quaternion.fromAxisAngle([0,1,0],utils.degToRad(90))],

 [2, [8,0,0],   Quaternion.fromAxisAngle([0,1,0],utils.degToRad(90)),
	 [8,0,-7],   Quaternion.fromAxisAngle([0,1,0.3],utils.degToRad(60)),
 	 [8,0,-8],  Quaternion.fromAxisAngle([0,0,1],utils.degToRad(90)),
 	 [8,0,-8],  Quaternion.fromAxisAngle([0,0,1],utils.degToRad(90))],

 [2, [8,0,-8],   Quaternion.fromAxisAngle([0,0,1],utils.degToRad(90)),
	 [10,4,-8],   Quaternion.fromAxisAngle([0,0,1],utils.degToRad(30)),
 	 [8,8,-8],   Quaternion.fromAxisAngle([0,1,0],utils.degToRad(180)),
 	 [8,8,-8],   Quaternion.fromAxisAngle([0,1,0],utils.degToRad(180))],

 [2, [8,8,-8],   Quaternion.fromAxisAngle([0,1,0],utils.degToRad(180)),
	 [4,8,-8],   Quaternion.fromAxisAngle([0,1,0.8],utils.degToRad(180)),
 	 [0,8,-8],   Quaternion.fromAxisAngle([0,1,0],utils.degToRad(270)),
 	 [0,8,-8],   Quaternion.fromAxisAngle([0,1,0],utils.degToRad(270))],

 [2, [0,8,-8],   Quaternion.fromAxisAngle([0,1,0],utils.degToRad(270)),
	 [0,8,-4],   Quaternion.fromAxisAngle([0,1,0],utils.degToRad(330)),
 	 [0,8,0],   Quaternion.fromAxisAngle([0,0,1],utils.degToRad(-90)),
 	 [0,8,0],   Quaternion.fromAxisAngle([0,0,1],utils.degToRad(-90))],

 [2, [0,8,0],   Quaternion.fromAxisAngle([0,0,1],utils.degToRad(-90)),
	 [0,4,2],   Quaternion.fromAxisAngle([0,0,1],utils.degToRad(-30)),
 	 [0,-2,0],   Quaternion.fromAxisAngle([1,0,0],utils.degToRad(0)),
 	 [0,0,0],   Quaternion.fromAxisAngle([1,0,0],utils.degToRad(0))]
];
}

