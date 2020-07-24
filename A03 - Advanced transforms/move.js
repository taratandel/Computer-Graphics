//matrices appear in reverse order with respect to the transformations they represent.
//To summarize, a rotation of α about an arbitrary axis passing through point (px, py, pz)
// and such that the x-axis can be aligned to it by first rotating an angle γ around the z-axis,
// and then an angle β around the y-axis, can be computed as:
// p'=T(px,py,pz)⋅Ry(β)⋅Rz(γ)⋅Rx(α)⋅Rz(γ)−1 ⋅Ry(β)−1⋅S(a)⋅T(px,py,pz)−1 ⋅p
function move() {
	// Rotate 45 degrees around an arbitrary axis passing through (1,0,-1). The x-axis can be aligned to the arbitrary axis after a rotation of 30 degrees around the z-axis, and then -60 degrees around the y-axis.
	var R1 =[1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
// page 29 of slide 
    let translationMatrix = utils.MakeTranslateMatrix(1, 0, -1)
    R1 = utils.multiplyMatrices(R1, translationMatrix)
    // Rotate to make x-axis align with arbitrary axis
    let rotationMatrixY = utils.MakeRotateYMatrix(-60)
    R1 = utils.multiplyMatrices(R1, rotationMatrixY)
    // Rotate to make x-axis align with arbitrary axis
    let rotationMatrixZ = utils.MakeRotateZMatrix(30)
    R1 = utils.multiplyMatrices(R1, rotationMatrixZ )
    // Rotate object
    let rotationMatrixX = utils.MakeRotateXMatrix(45)
    R1 = utils.multiplyMatrices(R1, rotationMatrixX)

//inversion 
    R1 = utils.multiplyMatrices(R1, utils.invertMatrix(utils.MakeRotateZMatrix(30)))
    R1 = utils.multiplyMatrices(R1, utils.invertMatrix(utils.MakeRotateYMatrix(-60)))
    R1 = utils.multiplyMatrices(R1, utils.invertMatrix(utils.MakeTranslateMatrix(1, 0, -1)))					   
	// Half the size of an object, using as fixed point (5,0,-2)
	//translate.scale.inverseTranslate
	var S1 = [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
	let translate = utils.MakeTranslateMatrix(5, 0, -2)
	S1 = utils.multiplyMatrices(S1, translate)
	let scale = utils.MakeScaleMatrix(0.5) 
	S1 = utils.multiplyMatrices(S1, scale)
	let inverseTranslate = utils.invertMatrix(translate)
	S1 = utils.multiplyMatrices(S1, inverseTranslate)
			   
	// Mirror the starship along a plane passing through (1,1,1), and obtained rotating 15 degree around the x axis the xz plane
	var S2 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	let translateMirror = utils.MakeTranslateMatrix(1,1,1)
	S2 = utils.multiplyMatrices(S2, translateMirror)
	let rx = utils.MakeRotateXMatrix(15)
	S2 = utils.multiplyMatrices(S2, rx)
	let mirror = [1.0, 0.0 , 0.0, 0.0,
			0.0, -1.0, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
			0.0, 0.0, 0.0, 1.0];
	S2 = utils.multiplyMatrices(S2, mirror)
    	S2 = utils.multiplyMatrices(S2, utils.invertMatrix(rx))
	S2 = utils.multiplyMatrices(S2,utils.invertMatrix(translateMirror))

	// Apply the inverse of the following sequence of transforms: Translation of (0, 0, 5) then rotation of 30 degree around the Y axis, and finally a uniform scaling of a factor of 3.
	var I1 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
	let tr = utils.MakeTranslateMatrix(0,0,5)
	let itr = utils.invertMatrix(tr)
	let rY = utils.MakeRotateYMatrix(30)
	let irY = utils.invertMatrix(rY)
	let scaling = utils.MakeScaleMatrix(3.0)
	let iScaling = utils.invertMatrix(scaling)
	I1 = utils.multiplyMatrices(I1, itr)	
	I1 = utils.multiplyMatrices(I1, iScaling)
	I1 = utils.multiplyMatrices(I1, irY)
	

	return [R1, S1, S2, I1];
}

