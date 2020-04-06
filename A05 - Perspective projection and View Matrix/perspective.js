function perspective(w, h, fov) {
  // Build a perspective projection matrix, for a viewport w hose size is determined by parameters w (width) and h (height), and whose fov-y is passed in parameter fov. Near plane is n=0.1, and far plane f=100.

  let a = w / h;
  let n = 1.0;
  let f = 101.0;

  let tan_fi_2 = Math.tan(utils.degToRad(fov / 2.0));


  var out =
    [
      1 / (a * tan_fi_2)	, 0.0					, 0.0								, 0.0										,
			0.0								, 1 / tan_fi_2	, 0.0								, 0.0										,
      0.0								, 0.0					, (f + n) / (n - f)	, (2 * f * n) / (n - f)	,
      0.0								, 0.0					, -1.0							, 1.0
		];

  return out;
}

