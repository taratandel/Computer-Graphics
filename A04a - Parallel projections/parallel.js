function parallel() {
  // Build a parallel projection matrix, for a 16/9 viewport, with halfwidt w=40, near plane n=1, and far plane f=101.

  // formulas
  // l = -w
  // r = w
  // t = w / a
  // b = -w / a

  w = 40.0
  f = 101.0
	n = 1.0
  a = 16.0 / 9.0


  var out =
    [
      1.0 / w	, 0.0		, 0.0				, 0.0								,
      0.0			, a / w	, 0.0				, 0.0								,
      0.0			, 0.0		, -2/(f - n), -(f + n) / (f - n),
      0.0			, 0.0		, 0.0				, 1.0
    ];


  return out;
}

