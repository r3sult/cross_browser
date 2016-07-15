// Generated by CoffeeScript 1.10.0
(function() {
  var hashRGB, hasher, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  hasher = null;

  root.hashRGB = hashRGB = function(pixels) {
    var RGB, i, j, ref;
    RGB = new Uint8Array(pixels.length * 3.0 / 4.0);
    for (i = j = 0, ref = pixels.length / 4.0; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      RGB[3 * i + 0] = pixels[4 * i + 0];
      RGB[3 * i + 1] = pixels[4 * i + 1];
      RGB[3 * i + 2] = pixels[4 * i + 2];
    }
    hasher = hasher != null ? hasher : emscript.cwrap('pixelsToHashCode', 'string', ['array', 'number']);
    return hasher(RGB, RGB.length);
  };

}).call(this);
