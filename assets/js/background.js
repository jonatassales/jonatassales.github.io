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
  document.body.parentNode.style.transition = "background-image 0.5s linear ";
  document.body.parentNode.style.backgroundImage = pattern.dataUrl;
}
setTimeout(setBackground,1);
setInterval(setBackground, 3000);
