function buildGeometry() {
	var i;
	
	// Draws a Cone --- Already done, just for inspiration
	///// Creates vertices
	//نقطه‌ی بالایی مخروط
	var vert1 = [[0.0, 1.0, 0.0]];
	// y برابر با منفی یک چون باید پایین باشه
	// بقیه نقاط دورشن
	// برای کشیدن دایره
	for(i = 0; i < 36; i++) {
		vert1[i+1] = [Math.sin(i*10.0/180.0*Math.PI), -1.0, Math.cos(i*10.0/180.0*Math.PI)];
	}
	// نقطه‌ی مرکزی دایره
	vert1[37] = [0.0, -1.0, 0.0]
	////// Creates indices
	var ind1 = [];
	//////// Upper part
	// همیشه اولیش اون نقطه وسطس
	// بعد دورش
	j = 0;
	for(i = 0; i < 36; i++) {
		ind1[j++] = 0;
		ind1[j++] = i + 1; // first point
		ind1[j++] = (i + 1) % 36 + 1; // second point
	}
	//////// Lower part
	for(i = 0; i < 36; i++) {
		ind1[j++] = 37;
		ind1[j++] = (i + 1) % 36 + 1;
		ind1[j++] = i + 1;
	}
	
	var color1 = [1.0, 0.0, 0.0];
	addMesh(vert1, ind1, color1);






	// Draws a Cylinder -- To do for the assignment.
	let vert2 = [];
	k = 0;

	//create circle upperPart
	for (i = 0; i<36; i++){
		vert2[k++] = [Math.sin(i*10.0/180.0*Math.PI), 1.0, Math.cos(i*10.0/180.0*Math.PI)];
	}

	//create circle lower part
	for (i = 0; i<36; i++){
		vert2[k++] = [Math.sin(i*10.0/180.0*Math.PI), -1.0, Math.cos(i*10.0/180.0*Math.PI)];
	}
	vert2[k++] = [0.0, 1.0, 0.0];
	vert2[k++] = [0.0, -1.0, 0.0];
	var ind2 = [];

	j = 0;
	for(i = 0; i < 36; i++) {
		ind2[j++] = 72;
		ind2[j++] = i;
		ind2[j++] = (i + 1) % 36;
	}

	for (i = 0; i<36; i++) {
		ind2[j++] = i;
		ind2[j++] = i + 36;
		ind2[j++] = (i + 1) % 36;

		ind2[j++] = (i + 1) % 36;
		ind2[j++] = i+ 36;
		ind2[j++] = (i+1) % 36 + 36;
	}

	for(i = 0; i < 36; i++) {
		ind2[j++] = 73;

		ind2[j++] = (i + 1) % 36 + 36;
		ind2[j++] = i + 36;
	}
	var color2 = [0.0, 0.0, 1.0];
	addMesh(vert2, ind2, color2);






	// Draws a Sphere --- Already done, just for inspiration
	var vert3 = [[0.0, 1.0,0.0]];
	///// Creates vertices
	k = 1;
	for(j = 1; j < 18; j++) {
		for(i = 0; i < 36; i++) {
			x = Math.sin(i*10.0/180.0*Math.PI) * Math.sin(j*10.0/180.0*Math.PI);
			y = Math.cos(j*10.0/180.0*Math.PI);
			z = Math.cos(i*10.0/180.0*Math.PI) * Math.sin(j*10.0/180.0*Math.PI);
			vert3[k++] = [x, y, z];
		}
	}
	vert3[k++] = [0.0,-1.0,0.0];
	
	////// Creates indices
	var ind3 = [];
	k = 0;
	///////// Lateral part
	for(i = 0; i < 36; i++) {
		for(j = 1; j < 17; j++) {
			ind3[k++] = i + (j-1) * 36 + 1;
			ind3[k++] = i + j * 36 + 1;
			ind3[k++] = (i + 1) % 36 + (j-1) * 36 + 1;

			ind3[k++] = (i + 1) % 36 + (j-1) * 36 + 1;
			ind3[k++] = i + j * 36 + 1;
			ind3[k++] = (i + 1) % 36 + j * 36 + 1;
		}
	}	
	//////// Upper Cap
	for(i = 0; i < 36; i++) {
		ind3[k++] = 0;
		ind3[k++] = i + 1;
		ind3[k++] = (i + 1) % 36 + 1;
	}
	//////// Lower Cap
	for(i = 0; i < 36; i++) {
		ind3[k++] = 577;
		ind3[k++] = (i + 1) % 36 + 540;
		ind3[k++] = i + 540;
	}
	
	var color3 = [0.0, 1.0, 0.0];
	addMesh(vert3, ind3, color3);
	
	
	
	
	
	// Draws a Torus -- To do for the assignment
	var vert4 = [];
	var s = 0.5; // scale

	var lon_start = 0;
	var lon_end = 360;
	var lon_step = 10.0;

	var lat_start = 0;
	var lat_end = 360;
	var lat_step = 10.0;

	let R = -2.0;

	let r = 1.0;
	///// Creates vertices
	k = 0;
	j = 0;
	for (j = lat_start / lat_step; j < lat_end / lat_step; j++) {
		for (i = lon_start/ lon_step; i < lon_end / lon_step; i++) {
			x = ((r*Math.sin(i * lon_step / 180.0 * Math.PI) + R) * Math.cos(j * lat_step / 180.0 * Math.PI)) * s;
			y = r*Math.cos(i * lon_step / 180.0 * Math.PI) * s;
			z = ((r*Math.sin(i * lon_step / 180.0 * Math.PI) + R) * Math.sin(j * lat_step / 180.0 * Math.PI)) * s;

			vert4[k++] = [x, y, z];
		}
	}

	var ind4 = [];
	k = 0;
	var lons = parseInt((lon_end - lon_start) / lon_step, 10);
	var lats = parseInt((lat_end - lat_start) / lat_step, 10);
	for (j = lat_start / lat_step; j < lat_end / lat_step; j++) {
		for (i = lon_start/ lon_step; i < lon_end / lon_step; i++) {
			ind4[k++] = j * lons + i;
			ind4[k++] = j * lons + (i + 1) % lons;
			ind4[k++] = ((j + 1) % lats) * lons + i;

			ind4[k++] = j * lons + (i + 1) % lons;
			ind4[k++] = ((j + 1) % lats) * lons + (i + 1) % lons;
			ind4[k++] = ((j + 1) % lats) * lons + i;

		}
	}


	var color4 = [1.0, 1.0, 0.0];
	addMesh(vert4, ind4, color4);
}

