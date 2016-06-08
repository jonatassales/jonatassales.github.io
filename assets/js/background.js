var setBackground = function() {
  var t = new Trianglify({
    noiseIntensity: 0,
    cellsize: 50,
    fillOpacity: 0.5
  });
  var pattern;
  var width = window.innerWidth;
  var height = window.innerWidth;
  pattern = t.generate(width, height);
  document.body.parentNode.setAttribute('style', 'background-image: ' + pattern.dataUrl);
}
setTimeout(setBackground,1);
setInterval(setBackground, 3000);
