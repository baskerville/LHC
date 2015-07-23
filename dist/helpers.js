"use strict";

var abs = Math.abs;
var PI = Math.PI;

function degree(r) {
	var a = r * 180 / PI;
	while (a < 0) {
		a += 360;
	}
	while (a > 360) {
		a -= 360;
	}
	return a;
}

function radian(d) {
	return PI * d / 180;
}

var hueMax = {
	h: 360,
	H: 400
};

function lerp(a, b, t, cor) {
	var m = hueMax[cor];
	if (m) {
		var d = abs(a - b);
		if (d > m / 2) {
			if (a > b) {
				b += m;
			} else {
				a += m;
			}
		}
	}
	return ((1 - t) * a + t * b) % (m || Infinity);
}

module.exports = {
	degree: degree,
	radian: radian,
	lerp: lerp
};