function parallel() {
  // Build a parallel projection matrix, for a 16/9 viewport, with halfwidt w=40, near plane n=1, and far plane f=101.
  //first it moves the center of the projection box in the origin with a translation
  //  normalizes the coordinates between -1 and 1 by performing a scale transformation
  //  The last step converts the system from right-handed to left-handed, by inverting the z-axis with the mirror transformation
  // formulas
  // l = -w
  // r = w
  // t = w / a
  // b = -w / a

  let w = 40.0
  let f = 101.0
  let n = 1.0
  let a = 16.0 / 9.0


  var out =
    [
      1.0 / w	, 0.0		, 0.0				, 0.0								,
      0.0			, a / w	, 0.0				, 0.0								,
      0.0			, 0.0		, -2/(f - n), -(f + n) / (f - n),
      0.0			, 0.0		, 0.0				, 1.0
    ];


  return out;
}

