document.addEventListener("DOMContentLoaded", function(event) {
  var date = new Date();
  var year = date.getFullYear();
  document.getElementsByClassName("copyright")[0].innerHTML = year+" - Jonatas Sales";

  document.onscroll = function() {
    if (document.body.scrollTop > 2000) {
      circles_action();
      document.onscroll = false;
    }
  };

  function circles_action() {
    for (var i = 1; i <= 8; i++) {
      var child = document.getElementById('circles-' + i);
      var percentage = document.getElementById("circles-" + i).getAttribute("percent");;
      Circles.create({
        id: child.id,
        percentage: percentage,
        radius: 80,
        width: 15,
        number: percentage,
        text: '%',
        colors: ['#fff', '#2980b9']
      });
    }
  }
});